import React from 'react';
import { ExternalLink, Github, Mail, Terminal, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, activeSection }) => {
  const navItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Audio AI Lab', href: '#audio-lab' },
    { label: 'Catch My Dream', href: '#catch-my-dream' },
    { label: 'DevOps Runner', href: '#devops-runner' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'GitHub Readme', href: '#github-studio' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors font-display flex items-center gap-2"
        >
          <span>Akash Keluth</span>
          <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Open for collaboration" />
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-400">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`hover:text-white transition-colors relative py-1 ${
                activeSection === item.href.slice(1) ? 'text-cyan-400 font-semibold' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
            title="View Akash's GitHub"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-cyan-500/20"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Collaborate</span>
          </button>
        </div>
      </div>
    </header>
  );
};
