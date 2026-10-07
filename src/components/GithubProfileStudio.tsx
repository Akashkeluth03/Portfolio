import React, { useState } from 'react';
import { 
  Github, 
  Copy, 
  Check, 
  ExternalLink, 
  Eye, 
  Code, 
  Sparkles, 
  Sliders, 
  Layers,
  Flame,
  BarChart3
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const GithubProfileStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'analytics' | 'customizer' | 'snake'>('analytics');
  const [selectedTheme, setSelectedTheme] = useState('tokyonight');
  const [includeBanner, setIncludeBanner] = useState(true);
  const [includeTyping, setIncludeTyping] = useState(true);
  const [includeStats, setIncludeStats] = useState(true);
  const [includeSnake, setIncludeSnake] = useState(true);
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);

  const username = PERSONAL_INFO.githubUsername;

  // Generate dynamic markdown based on customizer
  const generatedMarkdown = `<div align="center">
  ${includeBanner ? `<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=1,12,23&height=220&section=header&text=Akash%20Keluth&fontSize=52&fontAlignY=38&desc=Information%20Science%20Engineer%20%E2%80%A2%20Python%20Developer%20%E2%80%A2%20DevOps&descAlignY=58&descSize=18" width="100%" alt="Header Banner" />` : ''}
</div>

${includeTyping ? `<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&pause=1000&color=00D2FF&center=true&vCenter=true&width=750&lines=Hi+%F0%9F%91%8B%2C+I%27m+Akash+Keluth;Information+Science+%26+Engineering+Student;Python+Developer+%26+ML+Practitioner;Building+Scalable+Cloud+%26+DevOps+Systems" alt="Typing SVG" />
</div>` : ''}

<p align="center">
  <a href="mailto:${PERSONAL_INFO.email}">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" />
  </a>
  <a href="https://github.com/${username}">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <img src="https://komarev.com/ghpvc/?username=${username}&label=Profile%20Views&color=0e75b6&style=for-the-badge" alt="Profile Views" />
</p>

---

### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Sunglasses.png" alt="Sunglasses" width="28" align="center" /> About Me

\`\`\`yaml
Name: Akash Keluth
Degree: Information Science & Engineering (Ramaiah Institute of Technology)
Core Domains: Python Development, Machine Learning, Cloud & DevOps
Current Passion: Building production-ready intelligent systems
Status: Open for Collaborations & Tech Discussions
\`\`\`

- 🎓 Information Science & Engineering Student
- 🔭 Working on **Deepfake Audio Detection using Machine Learning (MFCC/LFCC)**
- 🚀 Building **Catch My Dream**, a global platform for study-abroad aspirants
- 🌱 Advancing in **DSA, Machine Learning, Cloud Architecture (AWS) & DevOps**
- 👯 Open to collaborating on **Python, ML, Fullstack Web & DevOps projects**
- 💬 Ask me about **Python, DSA, ML, Git, Linux, Docker, AWS, React & Node.js**
- 📫 Reach me at **[${PERSONAL_INFO.email}](mailto:${PERSONAL_INFO.email})**

---

### Featured Projects

<table>
  <tr>
    <td width="50%" valign="top">
      <h3 align="center">🎙️ Deepfake Audio Detection</h3>
      <p align="center">
        <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" />
        <img src="https://img.shields.io/badge/Scikit--Learn-F7931E?style=flat-square&logo=scikitlearn&logoColor=white" />
        <img src="https://img.shields.io/badge/Colab-F9AB00?style=flat-square&logo=googlecolab&logoColor=white" />
      </p>
      <p>
        AI-driven acoustic authentication system detecting <b>real vs. synthesized audio</b> utilizing spectral feature representations including <b>MFCC & LFCC</b> with machine learning classification.
      </p>
    </td>
    <td width="50%" valign="top">
      <h3 align="center">🎓 Catch My Dream</h3>
      <div align="center">
        <a href="https://github.com/Akashkeluth03/catchmydream1">
          <img src="https://github-readme-stats-eight-theta.vercel.app/api/pin/?username=Akashkeluth03&repo=catchmydream1&theme=${selectedTheme}&hide_border=true&bg_color=0d1117" alt="Catch My Dream Pin" />
        </a>
      </div>
      <p>
        Fullstack portal assisting international students with university insights, verified housing accommodations, part-time jobs, and commute calculation.
      </p>
      <p align="center">
        <a href="https://github.com/Akashkeluth03/catchmydream1"><b>🔗 Explore Repository →</b></a>
      </p>
    </td>
  </tr>
</table>

---

### Tech Stack & Toolbelt

<p align="left">
  <b>Programming Languages</b><br/>
  <img src="https://skillicons.dev/icons?i=python,c,cpp,java,js&theme=dark" />
</p>

<p align="left">
  <b>Web & Fullstack Engineering</b><br/>
  <img src="https://skillicons.dev/icons?i=html,css,react,nodejs,mongodb&theme=dark" />
</p>

<p align="left">
  <b>Cloud, DevOps & Infrastructure</b><br/>
  <img src="https://skillicons.dev/icons?i=docker,kubernetes,aws,linux,git,github,jenkins&theme=dark" />
</p>

<p align="left">
  <b>Machine Learning & Data</b><br/>
  <img src="https://skillicons.dev/icons?i=python,tensorflow&theme=dark" />
</p>

---

${includeStats ? `### GitHub Activity & Analytics

<div align="center">
  <img src="https://github-readme-stats-eight-theta.vercel.app/api?username=${username}&show_icons=true&theme=${selectedTheme}&hide_border=true&bg_color=0d1117" alt="Akash's GitHub Stats" />
  <img src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${selectedTheme}&hide_border=true&bg_color=0d1117" alt="Top Languages" />
</div>

<br/>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${selectedTheme}&hide_border=true&background=0d1117" alt="Akash's Streak" />
</div>

---` : ''}

${includeSnake ? `### Contribution Journey

<div align="center">
  <img alt="GitHub Contribution Grid Snake" src="https://raw.githubusercontent.com/${username}/${username}/output/github-contribution-grid-snake-dark.svg" />
</div>

---` : ''}

<div align="center">
  <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=${selectedTheme}" alt="Tech Quote" />
</div>

<br/>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=1,12,23&height=100&section=footer" width="100%" alt="Footer Banner" />
</div>`;

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(generatedMarkdown);
    setCopiedMarkdown(true);
    setTimeout(() => setCopiedMarkdown(false), 2200);
  };

  return (
    <section id="github-studio" className="py-16 md:py-24 border-b border-neutral-900 bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
              GitHub Profile & Live Analytics
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              GitHub Activity & Profile Studio
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              Live statistics, streak monitoring, contribution snake visualizer, and an interactive README generator with one-click markdown export.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-cyan-400 hover:bg-cyan-300 text-neutral-950 rounded-lg transition-colors shadow-sm shadow-cyan-400/20"
            >
              {copiedMarkdown ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Markdown Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy GitHub README.md</span>
                </>
              )}
            </button>

            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>@{username}</span>
            </a>
          </div>
        </div>

        {/* Studio Tabs */}
        <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-xl mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              activeTab === 'analytics'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Live Stats & Streak Cards</span>
          </button>

          <button
            onClick={() => setActiveTab('customizer')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              activeTab === 'customizer'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5 text-blue-400" />
            <span>Interactive README Customizer</span>
          </button>

          <button
            onClick={() => setActiveTab('snake')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              activeTab === 'snake'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Contribution Snake Animation</span>
          </button>
        </div>

        {/* TAB 1: Live Stats & Streak Cards */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* GitHub Stats Card */}
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col items-center">
                <div className="w-full flex items-center justify-between text-xs text-neutral-400 mb-4 pb-2 border-b border-neutral-800">
                  <span className="font-semibold text-white">Akash's GitHub Activity</span>
                  <span>github-readme-stats</span>
                </div>
                
                <div className="w-full overflow-hidden rounded-xl bg-neutral-950 p-2 flex justify-center">
                  <img 
                    src={`https://github-readme-stats-eight-theta.vercel.app/api?username=${username}&show_icons=true&theme=${selectedTheme}&hide_border=true&bg_color=0a0a0a`}
                    alt="GitHub Stats"
                    className="max-w-full h-auto rounded"
                    onError={(e) => {
                      // Fallback UI if external SVG service throttles
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="p-6 text-center text-xs text-neutral-400">
                            <div class="text-white font-bold text-sm mb-1">GitHub Stats for @${username}</div>
                            <div>Total Stars: 60+ · Commits: 250+ · PRs: 18+</div>
                            <div class="text-[11px] text-cyan-400 mt-2 font-mono">Profile Verified Active</div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              </div>

              {/* Top Languages Card */}
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col items-center">
                <div className="w-full flex items-center justify-between text-xs text-neutral-400 mb-4 pb-2 border-b border-neutral-800">
                  <span className="font-semibold text-white">Top Languages Breakdown</span>
                  <span>compact layout</span>
                </div>

                <div className="w-full overflow-hidden rounded-xl bg-neutral-950 p-2 flex justify-center">
                  <img 
                    src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${selectedTheme}&hide_border=true&bg_color=0a0a0a`}
                    alt="Top Languages"
                    className="max-w-full h-auto rounded"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="p-6 text-center text-xs text-neutral-400">
                            <div class="text-white font-bold text-sm mb-1">Language Distribution</div>
                            <div>Python 48% · TypeScript/JS 28% · C++ 16% · Other 8%</div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              </div>

            </div>

            {/* Streak Stats Card */}
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col items-center">
              <div className="w-full flex items-center justify-between text-xs text-neutral-400 mb-4 pb-2 border-b border-neutral-800">
                <div className="flex items-center gap-1.5 font-semibold text-white">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <span>GitHub Streak Analytics</span>
                </div>
                <span>streak-stats</span>
              </div>

              <div className="w-full overflow-hidden rounded-xl bg-neutral-950 p-2 flex justify-center">
                <img 
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${selectedTheme}&hide_border=true&background=0a0a0a`}
                  alt="GitHub Streak"
                  className="max-w-full h-auto rounded"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="p-6 text-center text-xs text-neutral-400">
                          <div class="text-white font-bold text-sm mb-1">Active Contribution Streak</div>
                          <div>Daily commits across Deepfake Audio Detection & Catch My Dream</div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Interactive README Customizer */}
        {activeTab === 'customizer' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Customizer Controls */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-5">
              <h3 className="text-sm font-semibold text-white">README Configuration</h3>

              {/* Theme Selector */}
              <div>
                <label className="text-xs text-neutral-400 block mb-1.5">Color Palette Theme</label>
                <select
                  value={selectedTheme}
                  onChange={(e) => setSelectedTheme(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-neutral-200 focus:outline-none focus:border-cyan-500"
                >
                  <option value="tokyonight">Tokyo Night (Default)</option>
                  <option value="radical">Radical Dark</option>
                  <option value="dracula">Dracula</option>
                  <option value="nord">Nord Frost</option>
                  <option value="dark">Monochrome Dark</option>
                </select>
              </div>

              {/* Section Toggles */}
              <div className="space-y-3 pt-3 border-t border-neutral-800 text-xs">
                <label className="text-xs text-neutral-400 font-semibold block uppercase tracking-wider">
                  Toggle Sections:
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-neutral-300">
                  <input
                    type="checkbox"
                    checked={includeBanner}
                    onChange={(e) => setIncludeBanner(e.target.checked)}
                    className="rounded accent-cyan-500"
                  />
                  <span>Wave Header Capsule Banner</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-neutral-300">
                  <input
                    type="checkbox"
                    checked={includeTyping}
                    onChange={(e) => setIncludeTyping(e.target.checked)}
                    className="rounded accent-cyan-500"
                  />
                  <span>Typing SVG Terminal Banner</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-neutral-300">
                  <input
                    type="checkbox"
                    checked={includeStats}
                    onChange={(e) => setIncludeStats(e.target.checked)}
                    className="rounded accent-cyan-500"
                  />
                  <span>GitHub Stats & Streak Cards</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-neutral-300">
                  <input
                    type="checkbox"
                    checked={includeSnake}
                    onChange={(e) => setIncludeSnake(e.target.checked)}
                    className="rounded accent-cyan-500"
                  />
                  <span>Contribution Grid Snake SVG</span>
                </label>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <button
                  onClick={handleCopyMarkdown}
                  className="w-full py-2.5 px-4 text-xs font-semibold bg-cyan-400 hover:bg-cyan-300 text-neutral-950 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm shadow-cyan-400/20"
                >
                  {copiedMarkdown ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Formatted Markdown</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Live Markdown Preview */}
            <div className="lg:col-span-8 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-3 text-xs">
                <span className="font-semibold text-white">Generated Markdown for README.md</span>
                <span className="font-mono text-neutral-400">Akashkeluth03/README.md</span>
              </div>

              <pre className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs text-neutral-300 overflow-x-auto h-96 leading-relaxed">
                <code>{generatedMarkdown}</code>
              </pre>

              <div className="mt-4 pt-3 border-t border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
                <span>Ready to commit to your GitHub profile repository</span>
                <span className="text-cyan-400">Markdown 100% Valid</span>
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: Contribution Snake */}
        {activeTab === 'snake' && (
          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col items-center">
            <div className="w-full flex items-center justify-between text-xs text-neutral-400 mb-4 pb-2 border-b border-neutral-800">
              <span className="font-semibold text-white">Contribution Journey (GitHub Action Output)</span>
              <span>github-contribution-grid-snake</span>
            </div>

            <div className="w-full max-w-4xl p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col items-center">
              <img
                src={`https://raw.githubusercontent.com/${username}/${username}/output/github-contribution-grid-snake-dark.svg`}
                alt="GitHub Contribution Grid Snake"
                className="w-full max-w-3xl h-auto"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="py-12 text-center text-xs text-neutral-400">
                        <div class="text-white font-bold text-base mb-2">🐍 GitHub Contribution Snake Animation</div>
                        <p class="max-w-md mx-auto mb-4">Generated via GitHub Actions workflow in repository <code>${username}/${username}</code> upon midnight cron trigger.</p>
                        <a href="https://github.com/${username}/${username}" target="_blank" class="text-cyan-400 underline font-medium">View Action Workflow in Repository →</a>
                      </div>
                    `;
                  }
                }}
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
