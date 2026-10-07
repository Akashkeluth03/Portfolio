import React, { useState } from 'react';
import { X, Play, ExternalLink, Github, CheckCircle2, ShieldCheck, AlertTriangle } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
            Interactive Project Demonstration
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Demo Content Switcher */}
        {project.interactiveType === 'deepfake' && <DeepfakeDemo />}
        {project.interactiveType === 'catchmydream' && <CatchMyDreamDemo />}
        {project.interactiveType === 'lapvantage' && <LapVantageDemo />}
        {project.interactiveType === 'tomato' && <TomatoDemo />}

        {/* Tech Badges & Footer */}
        <div className="mt-6 pt-5 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-[11px] font-mono text-neutral-300">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// 1. Deepfake Audio Demo
const DeepfakeDemo: React.FC = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<'human' | 'synthetic'>('human');
  const [tested, setTested] = useState(false);

  const runTest = (type: 'human' | 'synthetic') => {
    setAnalyzing(true);
    setTested(false);
    setTimeout(() => {
      setResult(type);
      setAnalyzing(false);
      setTested(true);
    }, 800);
  };

  return (
    <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-4 text-xs">
      <div className="font-medium text-neutral-200">Test Acoustic Forensic Classification:</div>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => runTest('human')}
          disabled={analyzing}
          className="p-3 rounded-lg border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-left transition-colors"
        >
          <div className="font-semibold text-white">Sample A: Natural Speech</div>
          <div className="text-[11px] text-neutral-400 mt-1">Authentic vocal tract resonance & pitch jitter</div>
        </button>

        <button
          onClick={() => runTest('synthetic')}
          disabled={analyzing}
          className="p-3 rounded-lg border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-left transition-colors"
        >
          <div className="font-semibold text-white">Sample B: AI Vocoder Clone</div>
          <div className="text-[11px] text-neutral-400 mt-1">HiFi-GAN spectral flattening & phase artifact</div>
        </button>
      </div>

      {analyzing && (
        <div className="py-4 text-center text-neutral-400 font-mono">
          Extracting 13-dim MFCC & LFCC spectral features...
        </div>
      )}

      {tested && (
        <div className={`p-3.5 rounded-lg border flex items-center justify-between ${
          result === 'human'
            ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
            : 'bg-rose-950/30 border-rose-500/40 text-rose-300'
        }`}>
          <div className="flex items-center gap-2.5">
            {result === 'human' ? <ShieldCheck className="w-5 h-5 text-emerald-400" /> : <AlertTriangle className="w-5 h-5 text-rose-400" />}
            <div>
              <div className="font-bold text-white text-xs">
                {result === 'human' ? 'VERDICT: AUTHENTIC HUMAN SPEECH' : 'VERDICT: SYNTHETIC DEEPFAKE DETECTED'}
              </div>
              <div className="text-[11px] opacity-80">
                {result === 'human' ? 'LFCC roll-off: -18.4 dB · Natural organic harmonics' : 'High frequency phase distortion detected above 4kHz'}
              </div>
            </div>
          </div>
          <span className="font-mono font-bold text-white text-sm">
            {result === 'human' ? '98.4%' : '96.8%'}
          </span>
        </div>
      )}
    </div>
  );
};

// 2. CatchMyDream Demo
const CatchMyDreamDemo: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('Singapore');
  const destinations = [
    { country: 'Singapore', uni: 'National University of Singapore (NUS)', tuition: '$21,000 / yr', living: '~$1,100 / mo' },
    { country: 'Japan', uni: 'University of Tokyo', tuition: '¥535,800 / yr', living: '~$900 / mo' },
    { country: 'Malaysia', uni: 'Universiti Malaya (UM)', tuition: 'RM 14,000 / yr', living: '~$500 / mo' },
    { country: 'South Korea', uni: 'Seoul National University (SNU)', tuition: '$6,000 / yr', living: '~$800 / mo' }
  ];

  const current = destinations.find(d => d.country === selectedCountry) || destinations[0];

  return (
    <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-4 text-xs">
      <div className="flex items-center justify-between">
        <span className="font-medium text-neutral-200">Study in Asia University Matcher:</span>
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="bg-neutral-900 border border-neutral-800 rounded-lg px-2.5 py-1 text-white text-xs focus:outline-none"
        >
          {destinations.map(d => (
            <option key={d.country} value={d.country}>{d.country}</option>
          ))}
        </select>
      </div>

      <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 space-y-2">
        <div className="font-semibold text-white text-sm">{current.uni}</div>
        <div className="grid grid-cols-2 gap-2 text-neutral-400 text-xs">
          <div>Estimated Tuition: <span className="text-white font-mono">{current.tuition}</span></div>
          <div>Avg Student Living: <span className="text-white font-mono">{current.living}</span></div>
        </div>
        <div className="text-[11px] text-emerald-400 pt-1">
          ✓ Verified student accommodations and legal part-time visa allowances mapped.
        </div>
      </div>
    </div>
  );
};

// 3. LapVantage AI Demo
const LapVantageDemo: React.FC = () => {
  const [ram, setRam] = useState('16');
  const [storage, setStorage] = useState('512');
  const [gpu, setGpu] = useState('Dedicated');

  const calculatePrice = () => {
    let base = 500;
    if (ram === '16') base += 250;
    if (ram === '32') base += 550;
    if (storage === '1000') base += 150;
    if (storage === '2000') base += 350;
    if (gpu === 'Dedicated') base += 450;
    return base;
  };

  return (
    <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-4 text-xs">
      <div className="font-medium text-neutral-200">Hardware Specification Price Predictor:</div>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <label className="text-neutral-400 block mb-1">RAM Size</label>
          <select value={ram} onChange={(e) => setRam(e.target.value)} className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2 text-white">
            <option value="8">8 GB</option>
            <option value="16">16 GB</option>
            <option value="32">32 GB</option>
          </select>
        </div>
        <div>
          <label className="text-neutral-400 block mb-1">SSD Storage</label>
          <select value={storage} onChange={(e) => setStorage(e.target.value)} className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2 text-white">
            <option value="512">512 GB</option>
            <option value="1000">1 TB</option>
            <option value="2000">2 TB</option>
          </select>
        </div>
        <div>
          <label className="text-neutral-400 block mb-1">GPU Class</label>
          <select value={gpu} onChange={(e) => setGpu(e.target.value)} className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-2 text-white">
            <option value="Integrated">Integrated</option>
            <option value="Dedicated">Dedicated RTX</option>
          </select>
        </div>
      </div>

      <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 flex items-center justify-between">
        <span className="text-neutral-400">Random Forest Predicted Market Value:</span>
        <span className="text-base font-bold font-mono text-emerald-400">
          ${calculatePrice()} USD
        </span>
      </div>
    </div>
  );
};

// 4. Tomato Demo
const TomatoDemo: React.FC = () => {
  return (
    <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3 text-xs">
      <div className="font-medium text-neutral-200">MERN Stack Architecture Features:</div>
      <ul className="space-y-1.5 text-neutral-400 list-disc list-inside">
        <li>JWT-authenticated customer accounts with order history tracking</li>
        <li>Dynamic restaurant menu catalog with cart state management</li>
        <li>Stripe payment gateway integration simulation & backend webhook handlers</li>
        <li>Admin dashboard for order status updates (Preparing, In Transit, Delivered)</li>
      </ul>
    </div>
  );
};
