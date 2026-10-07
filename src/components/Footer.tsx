import React from 'react';
import { Github, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-neutral-950 border-t border-neutral-900 text-neutral-400 overflow-hidden">
      {/* Decorative Wave Homage */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-20">
        <svg 
          className="w-full h-12" 
          viewBox="0 0 1440 60" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0 30C360 60 720 0 1080 30C1260 45 1350 15 1440 30V0H0V30Z" 
            fill="url(#footer-wave-gradient)" 
          />
          <defs>
            <linearGradient id="footer-wave-gradient" x1="0" y1="0" x2="1440" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="1" stopColor="#8b5cf6" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-sm font-bold text-white font-display">
              Akash Keluth
            </div>
            <p className="text-xs text-neutral-500 mt-1">
              Information Science & Engineering · Ramaiah Institute of Technology
            </p>
          </div>

          {/* Quiet links */}
          <div className="flex items-center gap-6 text-xs text-neutral-400">
            <a 
              href={PERSONAL_INFO.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 text-xs"
              title="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            Built with React & Tailwind CSS · Designed for interactive project discovery
          </div>
          <div>
            © {new Date().getFullYear()} Akash Keluth. Open source software.
          </div>
        </div>
      </div>
    </footer>
  );
};
