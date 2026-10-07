import React, { useState } from 'react';
import { TECH_ITEMS } from '../data/portfolioData';
import { TechItem } from '../types';
import { Wrench, CheckCircle, Code, Layers, Sparkles } from 'lucide-react';

export const TechStackExplorer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'languages' | 'fullstack' | 'devops' | 'ml'>('all');
  const [selectedTech, setSelectedTech] = useState<TechItem>(TECH_ITEMS[0]);

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Programming Languages' },
    { id: 'fullstack', label: 'Web & Fullstack' },
    { id: 'devops', label: 'Cloud & DevOps' },
    { id: 'ml', label: 'Machine Learning & AI' },
  ];

  const filteredItems = TECH_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="tech-stack" className="py-16 md:py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
              Engineering Skillset & Toolbelt
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Technical Stack & Frameworks
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              Systems architecture, languages, and tools leveraged across machine learning research, distributed backend microservices, and automated cloud deployments.
            </p>
          </div>

          <div className="text-xs text-neutral-400 font-mono">
            {TECH_ITEMS.length} Core Technologies Documented
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-xl mb-8 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as 'all' | 'languages' | 'fullstack' | 'devops' | 'ml')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid and Inspector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Tech Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredItems.map((tech) => {
              const isSelected = selectedTech.id === tech.id;
              return (
                <button
                  key={tech.id}
                  onClick={() => setSelectedTech(tech)}
                  className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-neutral-800 border-cyan-500/70 shadow-sm shadow-cyan-500/10'
                      : 'bg-neutral-900/50 border-neutral-800/80 hover:bg-neutral-800/50 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="font-semibold text-white text-xs sm:text-sm">
                      {tech.name}
                    </span>
                    <span className="text-[10px] text-cyan-400 font-mono">
                      {tech.experienceLevel === 'Advanced' ? '★ 4.8' : '★ 4.2'}
                    </span>
                  </div>

                  <div className="text-[11px] text-neutral-400 line-clamp-2 mb-2">
                    {tech.description}
                  </div>

                  <div className="text-[10px] text-neutral-500 flex items-center justify-between pt-2 border-t border-neutral-800/60">
                    <span className="capitalize">{tech.category}</span>
                    <span className="text-cyan-400 font-medium">Inspect →</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Inspector Panel */}
          <div className="lg:col-span-5 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
                <div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider">
                    Technology Inspection
                  </div>
                  <h3 className="text-xl font-bold text-white font-display mt-0.5">
                    {selectedTech.name}
                  </h3>
                </div>

                <span className={`text-xs px-2.5 py-1 rounded font-medium ${
                  selectedTech.experienceLevel === 'Advanced'
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                    : 'bg-blue-950 text-blue-300 border border-blue-800'
                }`}>
                  {selectedTech.experienceLevel}
                </span>
              </div>

              <div className="space-y-4 text-xs text-neutral-300">
                <div>
                  <div className="text-[11px] text-neutral-400 mb-1 font-semibold uppercase tracking-wider">
                    Application in Akash's Work
                  </div>
                  <p className="text-neutral-300 leading-relaxed">
                    {selectedTech.description}
                  </p>
                </div>

                <div>
                  <div className="text-[11px] text-neutral-400 mb-1 font-semibold uppercase tracking-wider">
                    Associated Projects
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedTech.usageInProjects.map((proj) => (
                      <span 
                        key={proj}
                        className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-xs text-neutral-200"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedTech.sampleCode && (
                  <div>
                    <div className="text-[11px] text-neutral-400 mb-1 font-semibold uppercase tracking-wider">
                      Reference Code Snippet
                    </div>
                    <pre className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-[11px] text-neutral-300 overflow-x-auto leading-relaxed">
                      <code>{selectedTech.sampleCode}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
              <span>Domain: {selectedTech.category.toUpperCase()}</span>
              <span className="text-cyan-400">Tested in Production</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
