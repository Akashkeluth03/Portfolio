import React from 'react';
import { motion } from 'motion/react';
import { Github, Star, GitFork, ArrowUpRight, FolderGit2, Activity } from 'lucide-react';
import { PERSONAL_DATA, GITHUB_REPOS } from '../data/portfolio';

export const GitHub: React.FC = () => {
  return (
    <section id="github" className="py-20 md:py-28 border-t border-neutral-900 bg-neutral-950">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                Open Source & Code
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Open Source & GitHub
              </h2>
            </div>

            <a
              href={PERSONAL_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors w-fit"
            >
              <Github className="w-4 h-4" />
              <span>@Akashkeluth03</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
            </a>
          </div>

          {/* Activity Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
              <div className="text-xs text-neutral-400 mb-1">Public Repositories</div>
              <div className="text-xl font-bold font-mono text-white">15+</div>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
              <div className="text-xs text-neutral-400 mb-1">Algorithmic Solutions</div>
              <div className="text-xl font-bold font-mono text-white">300+</div>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
              <div className="text-xs text-neutral-400 mb-1">Primary Language</div>
              <div className="text-xl font-bold font-mono text-white">Python / TS</div>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
              <div className="text-xs text-neutral-400 mb-1">CI/CD Automated</div>
              <div className="text-xl font-bold font-mono text-white">100%</div>
            </div>
          </div>

          {/* Selected Repositories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {GITHUB_REPOS.map((repo, i) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl bg-neutral-900/30 border border-neutral-800/80 hover:border-neutral-700 transition-all hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-neutral-200 truncate">
                      <FolderGit2 className="w-4 h-4 text-neutral-400 shrink-0" />
                      <span className="truncate">{repo.name}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-300 shrink-0" />
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-4 line-clamp-2">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-neutral-900 text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    <span>{repo.language}</span>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-[11px]">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-neutral-400" />
                      <span>{repo.stars}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3 text-neutral-400" />
                      <span>{repo.forks}</span>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
