import React from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolio';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-neutral-900 bg-neutral-950">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
            Toolbelt & Technologies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mb-12 max-w-2xl leading-relaxed">
            Technologies and frameworks applied across full-stack web applications, DevOps delivery pipelines, and machine learning models.
          </p>

          {/* Staggered Grid of Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILL_CATEGORIES.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: catIndex * 0.08 }}
                className="p-5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 hover:border-neutral-700 transition-all hover:-translate-y-1 group"
              >
                <div className="text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-4 pb-2 border-b border-neutral-800/80 flex items-center justify-between">
                  <span>{category.title}</span>
                  <span className="text-[11px] font-mono text-neutral-500 font-normal">
                    {category.skills.length} tools
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-neutral-950/80 border border-neutral-800/80 text-xs font-medium text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
