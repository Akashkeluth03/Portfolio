import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Radio, 
  GraduationCap, 
  Copy, 
  Check, 
  ExternalLink,
  Code2, 
  Cpu, 
  Cloud,
  Sparkles,
  Github,
  Mail
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onExploreProjects: () => void;
  onLaunchAudioLab: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenContact, 
  onExploreProjects, 
  onLaunchAudioLab 
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = PERSONAL_INFO.taglines;

  useEffect(() => {
    const currentFullText = roles[typewriterIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTypewriterIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typewriterIndex, roles]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-neutral-900">
      {/* Decorative Waving Gradient Background Homage */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 blur-3xl rounded-full" />
        <svg 
          className="absolute top-0 left-0 w-full h-48 opacity-25" 
          viewBox="0 0 1440 180" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0 60C240 120 480 0 720 60C960 120 1200 20 1440 80V0H0V60Z" 
            fill="url(#wave-gradient)" 
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="0.5" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="1" stopColor="#8b5cf6" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Status Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-6 text-xs text-neutral-400">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>Ramaiah Institute of Technology</span>
          </span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span>Information Science & Engineering</span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span className="text-cyan-400">Bangalore, India</span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Akash Keluth</span>
          </h1>

          {/* Dynamic Typographic Terminal Kicker */}
          <div className="h-10 sm:h-12 flex items-center mb-6">
            <div className="font-mono text-base sm:text-xl text-cyan-300 flex items-center gap-2">
              <span className="text-neutral-500">$</span>
              <span>{displayText}</span>
              <span className="w-2 h-5 bg-cyan-400 inline-block animate-pulse" />
            </div>
          </div>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl mb-8">
            Engineering robust machine learning models and cloud-native systems. 
            Currently developing an acoustic deepfake detection pipeline utilizing MFCC/LFCC spectral representations, 
            and engineering <span className="text-white font-medium">Catch My Dream</span>, an end-to-end relocation portal for global study-abroad aspirants.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              onClick={onExploreProjects}
              className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-lg shadow-cyan-500/20"
            >
              <span>Explore Featured Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onLaunchAudioLab}
              className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-colors"
            >
              <Radio className="w-4 h-4 text-cyan-400" />
              <span>Audio Deepfake Lab</span>
            </button>

            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800/80 rounded-lg transition-colors"
              title="Copy Akash's Email"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 text-xs">Email Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-neutral-400" />
                  <span className="text-xs">akashkeluth03@gmail.com</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Metrics & Highlight Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-neutral-900 text-neutral-300">
          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
            <div className="text-xs text-neutral-400 mb-1 flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-cyan-400" />
              <span>Acoustic Research</span>
            </div>
            <div className="text-lg font-bold text-white font-mono">MFCC & LFCC</div>
            <div className="text-xs text-neutral-400 mt-1">Deepfake voice authentication</div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
            <div className="text-xs text-neutral-400 mb-1 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
              <span>Study Abroad App</span>
            </div>
            <div className="text-lg font-bold text-white font-mono">Catch My Dream</div>
            <div className="text-xs text-neutral-400 mt-1">Full-stack student relocation</div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
            <div className="text-xs text-neutral-400 mb-1 flex items-center gap-1.5">
              <Cloud className="w-3.5 h-3.5 text-indigo-400" />
              <span>Cloud & DevOps</span>
            </div>
            <div className="text-lg font-bold text-white font-mono">Docker & K8s</div>
            <div className="text-xs text-neutral-400 mt-1">AWS CI/CD automation pipelines</div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
            <div className="text-xs text-neutral-400 mb-1 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Problem Solving</span>
            </div>
            <div className="text-lg font-bold text-white font-mono">300+ Solved</div>
            <div className="text-xs text-neutral-400 mt-1">Data structures & algorithms</div>
          </div>
        </div>
      </div>
    </section>
  );
};
