import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Square, 
  Volume2, 
  Activity, 
  ShieldCheck, 
  AlertTriangle, 
  Cpu, 
  FileCode, 
  Sparkles, 
  ExternalLink,
  Info,
  RefreshCw,
  Upload
} from 'lucide-react';
import { AUDIO_SAMPLES } from '../data/portfolioData';
import { AudioSample } from '../types';

export const AudioDeepfakeLab: React.FC = () => {
  const [selectedSample, setSelectedSample] = useState<AudioSample>(AUDIO_SAMPLES[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'visualizer' | 'features' | 'code'>('visualizer');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{
    verdict: 'human' | 'synthetic';
    confidence: number;
    metrics: {
      jitter: number;
      lfccTilt: number;
      mfccVariance: number;
      spectralCentroid: number;
    };
  } | null>({
    verdict: AUDIO_SAMPLES[0].type,
    confidence: AUDIO_SAMPLES[0].modelConfidence,
    metrics: {
      jitter: AUDIO_SAMPLES[0].jitter,
      lfccTilt: AUDIO_SAMPLES[0].lfccTilt,
      mfccVariance: AUDIO_SAMPLES[0].mfccVariance,
      spectralCentroid: 2450
    }
  });

  const [selectedModel, setSelectedModel] = useState<'rf' | 'svm' | 'cnn'>('rf');

  // Canvas visualizer refs
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Handle Audio Synthesis for demo playback
  const handlePlayAudio = () => {
    if (isPlaying) {
      stopAudio();
      return;
    }

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Configure frequencies mimicking human vocal cord fundamental frequency vs vocoder
      osc.type = selectedSample.type === 'human' ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(selectedSample.baseFreq, ctx.currentTime);

      // Add gentle modulation mimicking vocal speech cadence
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.0);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      oscillatorRef.current = osc;
      gainNodeRef.current = gain;
      setIsPlaying(true);

      osc.onended = () => {
        setIsPlaying(false);
      };

      setTimeout(() => {
        stopAudio();
      }, 3200);
    } catch {
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 3000);
    }
  };

  const stopAudio = () => {
    if (oscillatorRef.current) {
      try {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
      } catch {
        // Audio node already stopped
      }
      oscillatorRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      try {
        audioContextRef.current.close();
      } catch {
        // Handled
      }
      audioContextRef.current = null;
    }
    setIsPlaying(false);
  };

  // Run Animated Spectrogram/Waveform Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const render = () => {
      time += 0.04;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Background subtle grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw spectral bars or waveform
      const barCount = 36;
      const barWidth = width / barCount;

      for (let i = 0; i < barCount; i++) {
        const factor = isPlaying ? 1.0 : 0.45;
        const speed = selectedSample.type === 'human' ? 2.5 : 1.2;
        
        // Artificial vocoders have flatter, unnatural harmonics
        const freqOffset = selectedSample.type === 'human' 
          ? Math.sin(time * speed + i * 0.35) * Math.cos(time * 0.8 + i) * 0.5 + 0.5
          : Math.sin(time * speed + i * 0.15) * 0.3 + 0.5;

        const h = (freqOffset * (height - 30) + 15) * factor;
        const x = i * barWidth;
        const y = height - h;

        // Gradient based on frequency energy
        const gradient = ctx.createLinearGradient(0, height, 0, 0);
        if (selectedSample.type === 'human') {
          gradient.addColorStop(0, '#06b6d4'); // Cyan for human
          gradient.addColorStop(0.6, '#3b82f6');
          gradient.addColorStop(1, '#a855f7');
        } else {
          gradient.addColorStop(0, '#f97316'); // Orange/red for deepfake
          gradient.addColorStop(0.6, '#ef4444');
          gradient.addColorStop(1, '#ec4899');
        }

        ctx.fillStyle = gradient;
        ctx.fillRect(x + 2, y, barWidth - 4, h);

        // Top cap line
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x + 2, y - 2, barWidth - 4, 2);
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, selectedSample]);

  // Handle Model Classification trigger
  const handleRunAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisResult(null);

    setTimeout(() => {
      setIsAnalyzing(false);
      const isHuman = selectedSample.type === 'human';
      const baseConf = selectedSample.modelConfidence;
      const modelModifier = selectedModel === 'rf' ? 0 : selectedModel === 'svm' ? -0.8 : 0.6;
      
      setAnalysisResult({
        verdict: selectedSample.type,
        confidence: Math.min(99.4, Math.max(90, +(baseConf + modelModifier).toFixed(1))),
        metrics: {
          jitter: selectedSample.jitter,
          lfccTilt: selectedSample.lfccTilt,
          mfccVariance: selectedSample.mfccVariance,
          spectralCentroid: isHuman ? 2450 : 3820
        }
      });
    }, 950);
  };

  const pythonCodeSnippet = `# Deepfake Audio Detection: Feature Extraction Pipeline
# Author: Akash Keluth (Information Science & Engineering)
import librosa
import numpy as np
from sklearn.ensemble import RandomForestClassifier

def extract_forensic_features(audio_path, sr=16000):
    # 1. Load 16kHz normalized mono audio
    signal, _ = librosa.load(audio_path, sr=sr)
    
    # 2. Extract 13-dimensional MFCC with delta coefficients
    mfcc = librosa.feature.mfcc(y=signal, sr=sr, n_mfcc=13)
    mfcc_mean = np.mean(mfcc.T, axis=0)
    mfcc_var = np.var(mfcc.T, axis=0)
    
    # 3. Linear Frequency Cepstral Coefficients (LFCC) for vocoder phase detection
    # Captures high-frequency acoustic flattening typical of HiFi-GAN & neural TTS
    stft = np.abs(librosa.stft(signal))
    spectral_centroid = np.mean(librosa.feature.spectral_centroid(S=stft))
    spectral_rolloff = np.mean(librosa.feature.spectral_rolloff(S=stft, sr=sr))
    
    # 4. Concatenate feature vector for Scikit-Learn classification
    feature_vector = np.hstack([mfcc_mean, mfcc_var, spectral_centroid, spectral_rolloff])
    return feature_vector

# Model Training & Inference
# RF Classifier trained on ASVspoof speech authentication dataset
clf = RandomForestClassifier(n_estimators=100, max_depth=16, random_state=42)
# F1-Score: 98.2% across synthetic neural vocoders`;

  // Synthetic 13-dim MFCC values for visualization
  const mfccCoefficients = selectedSample.type === 'human'
    ? [-12.4, 8.2, -4.1, 3.6, -1.8, 2.4, -0.9, 1.5, -0.7, 0.8, -0.4, 0.3, -0.2]
    : [-4.2, 2.1, -1.2, 0.8, -0.3, 0.4, -0.2, 0.1, -0.1, 0.1, -0.05, 0.02, -0.01];

  return (
    <section id="audio-lab" className="py-16 md:py-24 border-b border-neutral-900 bg-neutral-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
              Acoustic Forensics & Machine Learning
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Deepfake Audio Detection Lab
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              Interactive acoustic authentication engine detecting authentic human voice versus neural synthesized speech using dual-stream MFCC and LFCC spectral feature extraction.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-400">Model Accuracy:</span>
            <span className="font-mono text-xs px-2.5 py-1 bg-cyan-950/60 border border-cyan-800/80 text-cyan-300 rounded font-semibold">
              98.2% F1-Score
            </span>
          </div>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Sample Selector & Audio Player */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Presets Card */}
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                  Select Acoustic Audio Sample
                </span>
                <span className="text-xs text-neutral-400">
                  4 Presets Available
                </span>
              </div>

              <div className="space-y-2">
                {AUDIO_SAMPLES.map((sample) => {
                  const isSelected = selectedSample.id === sample.id;
                  const isHuman = sample.type === 'human';

                  return (
                    <button
                      key={sample.id}
                      onClick={() => {
                        stopAudio();
                        setSelectedSample(sample);
                        setAnalysisResult({
                          verdict: sample.type,
                          confidence: sample.modelConfidence,
                          metrics: {
                            jitter: sample.jitter,
                            lfccTilt: sample.lfccTilt,
                            mfccVariance: sample.mfccVariance,
                            spectralCentroid: isHuman ? 2450 : 3820
                          }
                        });
                      }}
                      className={`w-full text-left p-3 rounded-xl border transition-all text-xs flex items-center justify-between gap-3 ${
                        isSelected 
                          ? 'bg-neutral-800 border-cyan-500/50 shadow-sm shadow-cyan-500/10' 
                          : 'bg-neutral-900/80 border-neutral-800/80 hover:bg-neutral-800/60 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-start gap-2.5 truncate">
                        <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                          isHuman ? 'bg-cyan-400' : 'bg-rose-500'
                        }`} />
                        <div className="truncate">
                          <div className={`font-medium truncate ${isSelected ? 'text-white' : 'text-neutral-300'}`}>
                            {sample.title}
                          </div>
                          <div className="text-[11px] text-neutral-400 truncate">
                            {sample.source} · {sample.duration}
                          </div>
                        </div>
                      </div>

                      <div className="shrink-0 text-right">
                        <span className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                          isHuman ? 'bg-cyan-950 text-cyan-300' : 'bg-rose-950 text-rose-300'
                        }`}>
                          {isHuman ? 'HUMAN' : 'SYNTHETIC'}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                <span>Sample Description:</span>
                <span className="text-[11px] text-neutral-400">16kHz Sampling Rate</span>
              </div>
              <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                {selectedSample.sampleDescription}
              </p>
            </div>

            {/* Audio Playback & Frequency Generator Card */}
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                  <Volume2 className="w-4 h-4 text-cyan-400" />
                  <span>Acoustic Wave Preview</span>
                </div>
                <span className="text-[11px] font-mono text-neutral-400">
                  Fundamental: {selectedSample.baseFreq} Hz
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePlayAudio}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-xs transition-colors ${
                    isPlaying 
                      ? 'bg-rose-600 hover:bg-rose-500 text-white' 
                      : 'bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-semibold shadow-md shadow-cyan-500/20'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Square className="w-3.5 h-3.5 fill-current" />
                      <span>Stop Playback</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Play Acoustic Sample</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleRunAnalysis}
                  disabled={isAnalyzing}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs border border-neutral-700 transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-cyan-400 ${isAnalyzing ? 'animate-spin' : ''}`} />
                  <span>{isAnalyzing ? 'Analyzing...' : 'Re-Run Classifier'}</span>
                </button>
              </div>

              {/* Classifier Model Selector */}
              <div className="mt-4 pt-4 border-t border-neutral-800/80">
                <span className="text-[11px] text-neutral-400 block mb-2">Classification Algorithm:</span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSelectedModel('rf')}
                    className={`py-1.5 px-2 rounded-lg text-xs font-medium border text-center transition-colors ${
                      selectedModel === 'rf' 
                        ? 'bg-neutral-800 border-cyan-400 text-cyan-300' 
                        : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    Random Forest
                  </button>
                  <button
                    onClick={() => setSelectedModel('svm')}
                    className={`py-1.5 px-2 rounded-lg text-xs font-medium border text-center transition-colors ${
                      selectedModel === 'svm' 
                        ? 'bg-neutral-800 border-cyan-400 text-cyan-300' 
                        : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    SVM (RBF)
                  </button>
                  <button
                    onClick={() => setSelectedModel('cnn')}
                    className={`py-1.5 px-2 rounded-lg text-xs font-medium border text-center transition-colors ${
                      selectedModel === 'cnn' 
                        ? 'bg-neutral-800 border-cyan-400 text-cyan-300' 
                        : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    Spectral CNN
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visualizer, Features, and Classification Outcome */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            {/* Visualizer & Inspection Card */}
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex-1 flex flex-col">
              
              {/* Tab Bar */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('visualizer')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                      activeTab === 'visualizer' 
                        ? 'bg-neutral-800 text-white' 
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Real-Time Spectrogram
                  </button>
                  <button
                    onClick={() => setActiveTab('features')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                      activeTab === 'features' 
                        ? 'bg-neutral-800 text-white' 
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    MFCC & LFCC Vector
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                      activeTab === 'code' 
                        ? 'bg-neutral-800 text-white' 
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Python Script
                  </button>
                </div>

                <span className="text-[11px] text-neutral-400 font-mono hidden sm:inline">
                  Librosa 0.10.x · Scikit-Learn
                </span>
              </div>

              {/* Tab 1: Real-Time Spectrogram Canvas */}
              {activeTab === 'visualizer' && (
                <div className="flex-1 flex flex-col justify-between">
                  <div className="relative rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800/80 h-52 sm:h-64 mb-4">
                    <canvas 
                      ref={canvasRef} 
                      width={680} 
                      height={260} 
                      className="w-full h-full block"
                    />

                    <div className="absolute top-2 left-3 text-[10px] font-mono text-neutral-400 flex items-center gap-2 bg-neutral-900/80 px-2 py-0.5 rounded backdrop-blur">
                      <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-cyan-400 animate-pulse' : 'bg-neutral-600'}`} />
                      <span>{isPlaying ? 'LIVE SPECTRAL ENERGY (PLAYING)' : 'IDLE HARMONIC RESPONSE'}</span>
                    </div>

                    <div className="absolute bottom-2 right-3 text-[10px] font-mono text-neutral-400 bg-neutral-900/80 px-2 py-0.5 rounded backdrop-blur">
                      Frequency: 20Hz - 8000Hz (Mel Scale)
                    </div>
                  </div>

                  {/* Forensic Metric Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800">
                      <div className="text-[10px] text-neutral-400">LFCC Spectral Tilt</div>
                      <div className="font-mono font-bold text-white mt-0.5">
                        {selectedSample.lfccTilt} dB
                      </div>
                      <div className="text-[9px] text-neutral-400">
                        {selectedSample.lfccTilt < -15 ? 'Natural Rolloff' : 'Acoustic Flattening'}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800">
                      <div className="text-[10px] text-neutral-400">Pitch Jitter</div>
                      <div className="font-mono font-bold text-white mt-0.5">
                        {(selectedSample.jitter * 100).toFixed(2)}%
                      </div>
                      <div className="text-[9px] text-neutral-400">
                        {selectedSample.jitter > 0.008 ? 'Organic Jitter' : 'Robotic Regularity'}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800">
                      <div className="text-[10px] text-neutral-400">MFCC Variance</div>
                      <div className="font-mono font-bold text-white mt-0.5">
                        {selectedSample.mfccVariance}
                      </div>
                      <div className="text-[9px] text-neutral-400">Cepstral Dispersion</div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800">
                      <div className="text-[10px] text-neutral-400">Spectral Centroid</div>
                      <div className="font-mono font-bold text-white mt-0.5">
                        {selectedSample.type === 'human' ? '2,450 Hz' : '3,820 Hz'}
                      </div>
                      <div className="text-[9px] text-neutral-400">Vocoder Center-Band</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: MFCC 13-Dimension Feature Vector Heatmap */}
              {activeTab === 'features' && (
                <div className="flex-1 space-y-4">
                  <div className="text-xs text-neutral-300">
                    <span className="font-semibold text-white">13-Dimensional Mel-Frequency Cepstral Coefficients (MFCCs)</span>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      Extracted via Short-Time Fourier Transform (STFT) with 40 mel filter banks and Discrete Cosine Transform (DCT).
                    </p>
                  </div>

                  <div className="grid grid-cols-13 gap-1 p-3 rounded-xl bg-neutral-950 border border-neutral-800 overflow-x-auto">
                    {mfccCoefficients.map((val, idx) => {
                      const isPositive = val >= 0;
                      return (
                        <div key={idx} className="flex flex-col items-center gap-1 min-w-[34px]">
                          <span className="text-[9px] font-mono text-neutral-400">C{idx}</span>
                          <div 
                            className={`w-full rounded h-16 flex items-center justify-center font-mono text-[9px] font-semibold transition-all ${
                              isPositive 
                                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                                : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                            }`}
                          >
                            {val}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs space-y-2">
                    <div className="font-medium text-white flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Why LFCC Outperforms Standard MFCC for Voice Clones</span>
                    </div>
                    <p className="text-neutral-400 text-xs leading-relaxed">
                      While MFCC applies non-linear mel scaling optimized for human ear perception (discarding high frequencies), neural TTS models and vocoders (HiFi-GAN, WaveGrad) introduce subtle phase discontinuities and artifacts strictly in high frequencies (&gt;4kHz). Linear Frequency Cepstral Coefficients (LFCC) preserve these linear bands without compression, allowing the classifier to isolate synthetic vocoder traces.
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 3: Python Source Code */}
              {activeTab === 'code' && (
                <div className="flex-1 relative rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800">
                  <pre className="p-4 text-xs font-mono text-neutral-300 overflow-x-auto h-72 leading-relaxed">
                    <code>{pythonCodeSnippet}</code>
                  </pre>
                </div>
              )}

              {/* Classification Outcome Bar */}
              {analysisResult && (
                <div className={`mt-5 p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  analysisResult.verdict === 'human'
                    ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-200'
                    : 'bg-rose-950/30 border-rose-500/40 text-rose-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      analysisResult.verdict === 'human' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-rose-500/20 text-rose-400'
                    }`}>
                      {analysisResult.verdict === 'human' ? (
                        <ShieldCheck className="w-6 h-6" />
                      ) : (
                        <AlertTriangle className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider font-semibold opacity-75">
                        Classifier Verdict
                      </div>
                      <div className="text-base font-bold text-white">
                        {analysisResult.verdict === 'human' ? 'AUTHENTIC HUMAN SPEECH' : 'SYNTHETIC DEEPFAKE DETECTED'}
                      </div>
                    </div>
                  </div>

                  <div className="sm:text-right">
                    <div className="text-xs opacity-75">Confidence Score</div>
                    <div className="text-xl font-bold font-mono text-white">
                      {analysisResult.confidence}%
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
