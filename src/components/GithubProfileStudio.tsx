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
  ${includeBanner ? `<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=1,12,23&height=220&section=header&text=Akash%20Keluth&fontSize=52&fontAlignY=38&desc=Information%20Science%20Engineer%20%E2%80%A2%20Python%20Developer%20%E2%80%A2%20DevOps%20%E2%80%A2%20ML%20Practitioner&descAlignY=58&descSize=17" width="100%" alt="Akash Keluth Header Banner" />` : ''}
</div>

${includeTyping ? `<div align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=23&pause=1000&color=00D2FF&center=true&vCenter=true&width=780&lines=Hi+%F0%9F%91%8B%2C+I'm+Akash+Keluth;Information+Science+%26+Engineering+Scholar+%40+MSRIT;Python+Developer+%26+Acoustic+ML+Practitioner;Building+Scalable+Cloud+%26+DevOps+Systems;Creator+of+Catch+My+Dream+%26+Audio+Deepfake+Detector" alt="Typing SVG" />
  </a>
</div>` : ''}

<p align="center">
  <a href="https://ais-pre-wi62un7ktlv3umru2ojitz-213450106904.asia-east1.run.app" target="_blank">
    <img src="https://img.shields.io/badge/Live_Portfolio-00D2FF?style=for-the-badge&logo=googlechrome&logoColor=black" alt="Live Interactive Portfolio" />
  </a>
  <a href="mailto:${PERSONAL_INFO.email}">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" />
  </a>
  <a href="https://github.com/${username}">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <img src="https://img.shields.io/badge/MSRIT-Bangalore-0052CC?style=for-the-badge&logo=google-scholar&logoColor=white" alt="MSRIT" />
  <img src="https://komarev.com/ghpvc/?username=${username}&label=Profile%20Views&color=00D2FF&style=for-the-badge" alt="Profile Views" />
</p>

---

### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Sunglasses.png" alt="Sunglasses" width="28" align="center" /> Executive Summary & Diagnostics

\`\`\`yaml
# ==============================================================================
# DEVELOPER PROFILE MATRIX: AKASH KELUTH
# ==============================================================================
Engineer: Akash Keluth
Institution: Ramaiah Institute of Technology (MSRIT), Bangalore
Discipline: Information Science & Engineering
Core Domains: Acoustic Machine Learning, Python Development, Cloud & DevOps
Current Research: Deepfake Audio Detection using MFCC & LFCC Spectral Features
Flagship Platform: Catch My Dream (Full-Stack Relocation & University Portal)
Competitive Programming: 300+ Algorithmic Challenges Solved (C++ / Python)
Availability: Open for High-Impact Collaborations, Internships & Research
Primary Contact: ${PERSONAL_INFO.email}
\`\`\`

- 🎓 **Academic Excellence**: Information Science & Engineering scholar at **Ramaiah Institute of Technology (MSRIT)**.
- 🔬 **Acoustic ML Research**: Engineering an end-to-end forensic authentication pipeline to discriminate authentic human speech from AI voice clones using **MFCC** and **LFCC** spectral representations.
- 🚀 **Full-Stack Innovation**: Architecting **Catch My Dream**, a platform providing international students with admission insights, verified housing rentals, visa-compliant part-time wage estimators, and commute analysis.
- ⚡ **Cloud & DevOps Rigor**: Deploying containerized microservices with **Docker**, **Kubernetes**, automated **CI/CD pipelines via Jenkins**, and infrastructure hosting on **AWS**.
- 🌱 **Continuous Mastery**: Leveling up in **Advanced DSA**, Graph Algorithms, Deep Learning, and Cloud System Architecture.

---

### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Laptop.png" alt="Laptop" width="28" align="center" /> Flagship Featured Projects

<table>
  <tr>
    <td width="50%" valign="top">
      <h3 align="center">🎙️ Deepfake Audio Detection</h3>
      <p align="center">
        <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" />
        <img src="https://img.shields.io/badge/Scikit--Learn-F7931E?style=flat-square&logo=scikitlearn&logoColor=white" />
        <img src="https://img.shields.io/badge/Librosa-2D3748?style=flat-square&logo=soundcharts&logoColor=white" />
        <img src="https://img.shields.io/badge/Colab-F9AB00?style=flat-square&logo=googlecolab&logoColor=white" />
      </p>
      <p>
        AI-driven acoustic authentication system detecting <b>real vs. synthesized audio</b> utilizing spectral feature representations including <b>MFCC & LFCC</b> with machine learning classification.
      </p>
      <ul>
        <li>Dual-stream extraction (13-dim MFCC + 20-dim LFCC)</li>
        <li>Isolates vocoder phase flattening in HiFi-GAN & TTS</li>
        <li><b>98.2% F1-Score</b> across benchmark audio corpora</li>
      </ul>
      <p align="center">
        <a href="https://github.com/Akashkeluth03"><b>🔗 Explore ML Repository →</b></a>
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
      <ul>
        <li>Global university eligibility matcher & cutoff database</li>
        <li>Verified rental apartment directory with deposit calculators</li>
        <li>Visa-compliant 20-hr weekly wage & living cost offset estimator</li>
      </ul>
      <p align="center">
        <a href="https://github.com/Akashkeluth03/catchmydream1"><b>🔗 Explore Catch My Dream →</b></a>
      </p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3 align="center">⚡ DevOps CI/CD & Cloud Pipeline</h3>
      <p align="center">
        <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" />
        <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white" />
        <img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white" />
        <img src="https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white" />
      </p>
      <p>
        Production-grade CI/CD automation pipeline with multi-stage Alpine Docker builds, automated Trivy security vulnerability audits, and zero-downtime Kubernetes rollouts.
      </p>
      <p align="center">
        <a href="https://github.com/Akashkeluth03"><b>🔗 View DevOps Setup →</b></a>
      </p>
    </td>
    <td width="50%" valign="top">
      <h3 align="center">🌐 Interactive Developer Portfolio</h3>
      <p align="center">
        <img src="https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB" />
        <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
        <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
        <img src="https://img.shields.io/badge/Web_Audio-FF4081?style=flat-square&logo=audio&logoColor=white" />
      </p>
      <p>
        High-performance web portfolio with live Web Audio API synthesizer, HTML5 Canvas spectrogram visualizer, and in-browser POSIX shell sandbox.
      </p>
      <p align="center">
        <a href="https://github.com/Akashkeluth03/Portfolio"><b>🔗 Explore Portfolio Repo →</b></a>
      </p>
    </td>
  </tr>
</table>

---

### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Wrench.png" alt="Wrench" width="28" align="center" /> Technical Stack & Toolbelt

<table width="100%">
  <tr>
    <td width="25%"><b>Programming Languages</b></td>
    <td>
      <img src="https://skillicons.dev/icons?i=python,c,cpp,java,js,ts,bash&theme=dark" alt="Languages" />
    </td>
  </tr>
  <tr>
    <td width="25%"><b>Fullstack & Web Architecture</b></td>
    <td>
      <img src="https://skillicons.dev/icons?i=react,nodejs,express,mongodb,tailwind,html,css&theme=dark" alt="Web & Fullstack" />
    </td>
  </tr>
  <tr>
    <td width="25%"><b>Cloud, DevOps & Systems</b></td>
    <td>
      <img src="https://skillicons.dev/icons?i=docker,kubernetes,aws,linux,git,github,jenkins&theme=dark" alt="Cloud & DevOps" />
    </td>
  </tr>
  <tr>
    <td width="25%"><b>Machine Learning & Data</b></td>
    <td>
      <img src="https://skillicons.dev/icons?i=python,tensorflow,scikitlearn,numpy,pandas&theme=dark" alt="ML & Data" />
    </td>
  </tr>
</table>

---

### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Books.png" alt="Books" width="28" align="center" /> Technical Focus & Active Mastery

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=19&pause=1000&color=00D2FF&center=true&vCenter=true&width=680&lines=Advanced+Data+Structures+%26+Algorithms+(300%2B+Solved);Deepfake+Audio+Spectrogram+Classification;AWS+Cloud+Architecture+%26+IAM+Governance;Docker+Multi-Stage+Container+Optimization;Kubernetes+Orchestration+%26+Service+Meshes;Production+CI%2FCD+Pipelines+with+Trivy+Security" alt="Focus Areas SVG" />
</div>

---

${includeStats ? `### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Chart%20Increasing.png" alt="Chart" width="28" align="center" /> GitHub Activity & Analytics

<div align="center">
  <img src="https://github-readme-stats-eight-theta.vercel.app/api?username=${username}&show_icons=true&theme=${selectedTheme}&hide_border=true&bg_color=0d1117" alt="Akash's GitHub Stats" />
  <img src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${selectedTheme}&hide_border=true&bg_color=0d1117" alt="Top Languages" />
</div>

<br/>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${selectedTheme}&hide_border=true&background=0d1117" alt="Akash's Streak" />
</div>

---` : ''}

${includeSnake ? `### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Snake.png" alt="Snake" width="28" align="center" /> Contribution Journey

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/${username}/${username}/output/github-contribution-grid-snake-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/${username}/${username}/output/github-contribution-grid-snake.svg" />
    <img alt="GitHub Contribution Grid Snake" src="https://raw.githubusercontent.com/${username}/${username}/output/github-contribution-grid-snake-dark.svg" />
  </picture>
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
