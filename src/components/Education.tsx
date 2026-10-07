import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { EDUCATION_ITEMS } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-neutral-900 bg-neutral-950">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-12">
            Education
          </h2>

          {/* Minimal Vertical Timeline */}
          <div className="relative pl-6 sm:pl-8 border-l border-neutral-800 space-y-12">
            {EDUCATION_ITEMS.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-neutral-950 border-2 border-neutral-600 group-hover:border-sky-400 transition-colors" />

                <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-white">
                      {item.degree}
                    </h3>
                    <span className="text-xs font-mono text-neutral-400 shrink-0">
                      {item.period}
                    </span>
                  </div>

                  <div className="text-sm font-medium text-neutral-300 mb-4 flex items-center gap-2">
                    <span>{item.institution}</span>
                    <span className="text-neutral-600">·</span>
                    <span className="text-xs text-neutral-400">{item.location}</span>
                  </div>

                  {item.highlights && (
                    <ul className="space-y-1.5 text-xs text-neutral-400 list-disc list-inside">
                      {item.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
