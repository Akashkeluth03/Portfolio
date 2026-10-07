import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Instagram, Mail, ExternalLink } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolio';

interface HeroProps {
  onViewProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProjects }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Very subtle background gradient glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-violet-500/5 blur-3xl rounded-full pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {/* Status Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>M S Ramaiah Institute of Technology</span>
            <span className="text-neutral-700">·</span>
            <span className="text-neutral-400">Bengaluru</span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-[1.1]">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Akash
            </span>{' '}
            <span className="inline-block animate-wave origin-bottom-right" role="img" aria-label="waving hand">
              👋
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg sm:text-xl font-medium text-neutral-300 mb-6">
            Information Science Engineering Student | Software Developer
          </h2>

          {/* Short description */}
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-8 max-w-2xl">
            {PERSONAL_DATA.description}
          </p>

          {/* Primary Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              onClick={onViewProjects}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-neutral-950 bg-white hover:bg-neutral-200 rounded-lg transition-all hover:translate-y-[-1px] shadow-sm"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={PERSONAL_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-all hover:translate-y-[-1px]"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Social Icons Strip */}
          <div className="flex items-center gap-3 pt-6 border-t border-neutral-900">
            <span className="text-xs text-neutral-400 mr-2">Connect:</span>

            <a
              href={PERSONAL_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 text-neutral-400 hover:text-white bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800/80 rounded-lg transition-all hover:scale-105"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 text-neutral-400 hover:text-sky-400 bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800/80 rounded-lg transition-all hover:scale-105"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_DATA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="p-2 text-neutral-400 hover:text-pink-400 bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800/80 rounded-lg transition-all hover:scale-105"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_DATA.email}`}
              aria-label="Send email"
              className="p-2 text-neutral-400 hover:text-cyan-400 bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800/80 rounded-lg transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
