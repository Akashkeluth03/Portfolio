import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Play, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolio';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-neutral-900 bg-neutral-950">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
            Selected Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mb-12 max-w-2xl leading-relaxed">
            Real-world systems, machine learning research, and full-stack applications with production-oriented engineering.
          </p>

          {/* 2x2 Grid of Staggered Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 sm:p-7 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header Row with Status Tag */}
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                    <span className="font-mono text-[11px] text-neutral-400">
                      0{index + 1}
                    </span>
                    {project.metrics && (
                      <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-neutral-950 text-neutral-300 border border-neutral-800">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-neutral-100 transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800/80 text-[11px] font-mono text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>

                    {project.hasInteractiveDemo ? (
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-neutral-950 bg-white hover:bg-neutral-200 rounded-lg transition-colors shadow-sm"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Live Demo</span>
                      </button>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg transition-colors"
                      >
                        <span>Explore</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Interactive Modal Component */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
