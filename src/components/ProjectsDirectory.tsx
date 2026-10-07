import React, { useState } from 'react';
import { 
  FEATURED_PROJECTS 
} from '../data/portfolioData';
import { Project } from '../types';
import { 
  Github, 
  ExternalLink, 
  Play, 
  Copy, 
  Check, 
  Search, 
  Layers, 
  Star, 
  GitFork,
  ArrowUpRight
} from 'lucide-react';

interface ProjectsDirectoryProps {
  onSelectProjectDemo: (demoType: 'deepfake' | 'catchmydream' | 'devops') => void;
}

export const ProjectsDirectory: React.FC<ProjectsDirectoryProps> = ({ onSelectProjectDemo }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ml' | 'fullstack' | 'devops' | 'dsa'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'ml', label: 'Machine Learning & Audio AI' },
    { id: 'fullstack', label: 'Full-Stack Web' },
    { id: 'devops', label: 'Cloud & DevOps' },
    { id: 'dsa', label: 'DSA & Algorithms' },
  ];

  const filteredProjects = FEATURED_PROJECTS.filter((proj) => {
    const matchesFilter = activeFilter === 'all' || proj.category === activeFilter;
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const handleCopyGit = (proj: Project) => {
    navigator.clipboard.writeText(`git clone ${proj.githubUrl}.git`);
    setCopiedId(proj.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
              Curated Portfolio Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Projects & Engineering Systems
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              Production architectures, machine learning research repositories, and interactive tools built by Akash Keluth with full source code access.
            </p>
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by tag or tech..."
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-xl mb-8 overflow-x-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as 'all' | 'ml' | 'fullstack' | 'devops' | 'dsa')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                activeFilter === tab.id
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const hasInteractiveDemo = !!project.demoType && project.demoType !== 'external';

            return (
              <div
                key={project.id}
                className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Clean unboxed metadata with typographic separators (Rule A) */}
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                    <span className="uppercase tracking-wider font-mono text-cyan-400 font-medium">
                      {project.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{project.stats?.tests || 'Active System'}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors font-display mb-1.5">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-300 font-medium mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-neutral-800/80">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="text-[11px] text-neutral-400 flex items-start gap-1.5">
                        <span className="text-cyan-400 font-bold shrink-0">·</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 text-[11px] text-neutral-400 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={tag} className="text-neutral-300 font-mono">
                        {tag}{i < project.tags.length - 1 ? ' · ' : ''}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg border border-neutral-800 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => handleCopyGit(project)}
                      className="p-2 text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg border border-neutral-800 transition-colors"
                      title="Copy Clone Command"
                    >
                      {copiedId === project.id ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {hasInteractiveDemo ? (
                    <button
                      onClick={() => onSelectProjectDemo(project.demoType as 'deepfake' | 'catchmydream' | 'devops')}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-300 border border-cyan-500/30 rounded-lg transition-colors"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Live Demo Lab</span>
                    </button>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg border border-neutral-800 transition-colors"
                    >
                      <span>Explore Repo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
