import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Terminal, Code2, Server, Cpu } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolio';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-neutral-900 bg-neutral-950">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Sub-heading */}
          <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
            Background & Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">
            About Me
          </h2>

          {/* Two-Column Desktop / Single-Column Mobile Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Narrative Prose */}
            <div className="lg:col-span-7 space-y-4 text-neutral-300 leading-relaxed text-sm sm:text-base">
              <p className="text-neutral-200 font-medium leading-relaxed">
                {PERSONAL_DATA.about.lead}
              </p>
              {PERSONAL_DATA.about.paragraphs.map((p, idx) => (
                <p key={idx} className="text-neutral-400 leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 bg-neutral-900 px-3 py-1.5 rounded-md border border-neutral-800">
                  <Code2 className="w-3.5 h-3.5 text-neutral-300" />
                  Full-Stack Engineering
                </span>
                <span className="flex items-center gap-1.5 bg-neutral-900 px-3 py-1.5 rounded-md border border-neutral-800">
                  <Server className="w-3.5 h-3.5 text-neutral-300" />
                  Cloud & CI/CD
                </span>
                <span className="flex items-center gap-1.5 bg-neutral-900 px-3 py-1.5 rounded-md border border-neutral-800">
                  <Cpu className="w-3.5 h-3.5 text-neutral-300" />
                  Machine Learning
                </span>
              </div>
            </div>

            {/* Right Column: Key Pillars & Core Focus */}
            <div className="lg:col-span-5 bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 space-y-4">
              <div className="text-xs font-semibold text-neutral-300 uppercase tracking-wider pb-2 border-b border-neutral-800">
                Core Competencies
              </div>

              <div className="space-y-3">
                {PERSONAL_DATA.about.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-neutral-800/80 text-xs text-neutral-400 leading-relaxed">
                "Driven by building reliable systems that solve real problems, from student relocation to audio authentication."
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
