import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle, Trophy, BookOpen } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolio';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 border-t border-neutral-900 bg-neutral-950">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
            Recognition & Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Achievements & Certifications
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mb-10 max-w-2xl leading-relaxed">
            Technical problem solving milestones, applied engineering research, and certified proficiencies.
          </p>

          {/* Compact 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ACHIEVEMENTS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-colors flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 shrink-0 text-sky-400">
                  <Award className="w-4 h-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-sm font-bold text-white truncate">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-950 text-neutral-400 border border-neutral-800 shrink-0">
                      {item.category}
                    </span>
                  </div>

                  <div className="text-xs text-neutral-400 mb-1.5 font-medium">
                    {item.issuer} {item.period && `· ${item.period}`}
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
