import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  Play, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Server, 
  Cloud, 
  ShieldCheck, 
  Layers, 
  RefreshCw,
  Copy,
  Check
} from 'lucide-react';

interface PipelineStage {
  id: string;
  name: string;
  icon: string;
  duration: string;
  command: string;
  logLines: string[];
}

const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: 'lint-test',
    name: 'Lint & Static Check',
    icon: 'lint',
    duration: '1.2s',
    command: 'flake8 --max-line-length=100 && npm run lint',
    logLines: [
      '[LINT] Auditing Python codebase with flake8...',
      '[LINT] Auditing TypeScript / React with tsc --noEmit...',
      '✓ No style infractions or syntax violations identified.',
      '✓ 0 errors, 0 warnings. Code style verified.'
    ]
  },
  {
    id: 'unit-tests',
    name: 'Unit & Model Tests',
    icon: 'test',
    duration: '2.4s',
    command: 'pytest tests/ -v --cov=audio_forensics',
    logLines: [
      '[TEST] tests/test_mfcc_extraction.py::test_mfcc_dim PASSED [24%]',
      '[TEST] tests/test_lfcc_spectrum.py::test_spectral_tilt PASSED [48%]',
      '[TEST] tests/test_vocoder_detector.py::test_hifigan_artifact PASSED [76%]',
      '[TEST] tests/test_api_endpoints.py::test_health_check PASSED [100%]',
      '✓ 42 passed in 1.84s (100% test suite pass rate).'
    ]
  },
  {
    id: 'docker-build',
    name: 'Multi-Stage Docker Build',
    icon: 'docker',
    duration: '3.1s',
    command: 'docker build --target production -t akash/audio-auth:v1.2 .',
    logLines: [
      'Step 1/6 : FROM python:3.11-slim AS builder',
      'Step 2/6 : RUN apt-get update && apt-get install -y libsndfile1',
      'Step 3/6 : COPY requirements.txt . && pip install --no-cache-dir -r requirements.txt',
      'Step 4/6 : FROM python:3.11-alpine AS runner',
      'Step 5/6 : COPY --from=builder /usr/local/lib/python3.11 /usr/local/lib/python3.11',
      'Step 6/6 : EXPOSE 8080 && CMD ["python", "server.py"]',
      '✓ Image built: akash/audio-auth:v1.2 (164 MB, reduced from 820 MB).'
    ]
  },
  {
    id: 'trivy-scan',
    name: 'Trivy Security Scan',
    icon: 'shield',
    duration: '1.5s',
    command: 'trivy image --severity HIGH,CRITICAL akash/audio-auth:v1.2',
    logLines: [
      '[SECURITY] Scanning container base layer (Alpine 3.19)...',
      '[SECURITY] Scanning Python dependencies (librosa, scikit-learn, numpy)...',
      'Total: 0 (UNKNOWN: 0, LOW: 0, MEDIUM: 0, HIGH: 0, CRITICAL: 0)',
      '✓ 0 Critical CVEs. Container passes enterprise security gate.'
    ]
  },
  {
    id: 'k8s-deploy',
    name: 'AWS ECS / K8s Deployment',
    icon: 'cloud',
    duration: '2.0s',
    command: 'kubectl apply -f k8s/production-deployment.yaml',
    logLines: [
      'deployment.apps/audio-auth-service configured',
      'service/audio-auth-service unchanged',
      'Waiting for rollout to finish: 0 of 3 updated pods are available...',
      'Waiting for rollout to finish: 1 of 3 updated pods are available...',
      'deployment "audio-auth-service" successfully rolled out.',
      '✓ GET https://api.akashkeluth.dev/healthz -> HTTP 200 OK (8ms latency).'
    ]
  }
];

export const DevOpsPipelineRunner: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(-1);
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const [liveLogs, setLiveLogs] = useState<string[]>([
    '# Akash Keluth DevOps Automation Runner ready.',
    '# Click "Trigger Deployment Pipeline" to run full CI/CD suite.'
  ]);

  // Terminal state
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ text: string; isCmd?: boolean }>>([
    { text: 'Akash Keluth POSIX Shell (v5.2.15-release)', isCmd: false },
    { text: 'Type "help" to see available DevOps & project commands.', isCmd: false }
  ]);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  const runPipeline = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStageIndex(0);
    setCompletedStages([]);
    setLiveLogs(['🚀 Initializing automated CI/CD pipeline execution...']);

    let step = 0;
    const executeStep = () => {
      if (step < PIPELINE_STAGES.length) {
        const stage = PIPELINE_STAGES[step];
        setCurrentStageIndex(step);
        setLiveLogs((prev) => [
          ...prev,
          `\n▶ Stage ${step + 1}/${PIPELINE_STAGES.length}: ${stage.name}`,
          `$ ${stage.command}`,
          ...stage.logLines
        ]);

        step++;
        setTimeout(() => {
          setCompletedStages((prev) => [...prev, step - 1]);
          executeStep();
        }, 1200);
      } else {
        setIsRunning(false);
        setCurrentStageIndex(-1);
        setLiveLogs((prev) => [
          ...prev,
          '\n🎉 CI/CD Pipeline finished successfully with zero errors!',
          '✓ Status: Production live & healthy on AWS cluster.'
        ]);
      }
    };

    setTimeout(executeStep, 400);
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...terminalHistory, { text: `$ ${terminalInput}`, isCmd: true }];

    if (cmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else if (cmd === 'help') {
      newHistory.push({
        text: 'Available commands:\n  help            - Display this manual\n  docker ps       - List running production containers\n  kubectl get pods- View Kubernetes cluster pods\n  cat about.yml   - Inspect Akash Keluth engineer profile\n  python test.py  - Run acoustic deepfake audio classifier\n  git status      - Show repository branch status\n  clear           - Clear terminal output',
        isCmd: false
      });
    } else if (cmd === 'docker ps') {
      newHistory.push({
        text: 'CONTAINER ID   IMAGE                    COMMAND                  STATUS         PORTS\n4a81c0989f2a   akash/audio-auth:v1.2    "python server.py"       Up 3 days      0.0.0.0:8080->8080\n7b1928014e5c   akash/catchmydream:v1.2  "node server.js"         Up 3 days      0.0.0.0:3000->3000\n3f91048a1c90   redis:7-alpine           "redis-server --save"    Up 3 days      6379/tcp',
        isCmd: false
      });
    } else if (cmd === 'kubectl get pods') {
      newHistory.push({
        text: 'NAME                                  READY   STATUS    RESTARTS   AGE\naudio-auth-deployment-7f99847-x2q1p   1/1     Running   0          42h\naudio-auth-deployment-7f99847-9kl02   1/1     Running   0          42h\ncatchmydream-frontend-54898b8-h7z9    1/1     Running   0          42h\ncatchmydream-backend-39827cd-v88a     1/1     Running   0          42h',
        isCmd: false
      });
    } else if (cmd === 'cat about.yml' || cmd === 'cat about.yaml') {
      newHistory.push({
        text: 'name: Akash Keluth\ndegree: Information Science & Engineering\ninstitution: Ramaiah Institute of Technology\ncore_domains:\n  - Python Development & ML\n  - Cloud Infrastructure & DevOps (AWS, Docker, K8s, Jenkins)\n  - Fullstack Architecture (React, Node, Express, MongoDB)\nstatus: Open for Collaborations & Tech Discussions',
        isCmd: false
      });
    } else if (cmd.includes('python')) {
      newHistory.push({
        text: '[Inference] Loading Librosa audio feature extractor...\n[MFCC] 13 dimensions extracted.\n[LFCC] Spectral tilt calculated: -18.4 dB.\n[Model] Random Forest classification: AUTHENTIC HUMAN (98.4% confidence).',
        isCmd: false
      });
    } else if (cmd === 'git status') {
      newHistory.push({
        text: 'On branch main\nYour branch is up to date with \'origin/main\'.\nnothing to commit, working tree clean',
        isCmd: false
      });
    } else if (cmd === 'whoami') {
      newHistory.push({
        text: 'akash.keluth - Information Science Engineer & DevOps Practitioner',
        isCmd: false
      });
    } else {
      newHistory.push({
        text: `bash: ${cmd}: command not found. Type "help" to see valid commands.`,
        isCmd: false
      });
    }

    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  return (
    <section id="devops-runner" className="py-16 md:py-24 border-b border-neutral-900 bg-neutral-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">
              Cloud Infrastructure & Automation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              DevOps CI/CD & Cloud Pipeline Runner
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              Production-grade pipeline demonstrating automated linting, test suites, multi-stage Docker builds, Trivy CVE security audits, and zero-downtime Kubernetes deployments.
            </p>
          </div>

          <button
            onClick={runPipeline}
            disabled={isRunning}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors disabled:opacity-50 shadow-md shadow-indigo-600/20"
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Executing Pipeline...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Trigger Deployment Pipeline</span>
              </>
            )}
          </button>
        </div>

        {/* Pipeline Stepper Visualization */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
          {PIPELINE_STAGES.map((stage, idx) => {
            const isCompleted = completedStages.includes(idx);
            const isCurrent = currentStageIndex === idx;

            return (
              <div
                key={stage.id}
                className={`p-3.5 rounded-xl border transition-all text-xs flex flex-col justify-between ${
                  isCompleted
                    ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300'
                    : isCurrent
                    ? 'bg-indigo-950/40 border-indigo-500 text-white shadow-md shadow-indigo-500/20 animate-pulse'
                    : 'bg-neutral-900/60 border-neutral-800 text-neutral-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-neutral-400">0{idx + 1}</span>
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : isCurrent ? (
                      <RefreshCw className="w-4 h-4 text-indigo-400 animate-spin" />
                    ) : (
                      <Clock className="w-4 h-4 text-neutral-600" />
                    )}
                  </div>
                  <div className="font-semibold text-white text-xs mb-1">
                    {stage.name}
                  </div>
                </div>

                <div className="mt-2 pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
                  <span className="font-mono">{stage.duration}</span>
                  <span className="text-[10px] uppercase font-mono">
                    {isCompleted ? 'PASSED' : isCurrent ? 'RUNNING' : 'QUEUED'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Two-Pane Terminal & Pipeline Log Output */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Live Pipeline Output */}
          <div className="lg:col-span-6 flex flex-col rounded-2xl bg-neutral-900/70 border border-neutral-800 overflow-hidden">
            <div className="px-4 py-3 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-neutral-300 font-medium">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>Pipeline Event Stream & Logs</span>
              </div>
              <span className="font-mono text-[11px] text-neutral-400">
                {isRunning ? 'STATUS: EXECUTING' : 'STATUS: IDLE'}
              </span>
            </div>

            <div className="p-4 font-mono text-xs text-neutral-300 bg-neutral-950 flex-1 h-80 overflow-y-auto space-y-1">
              {liveLogs.map((line, idx) => (
                <div 
                  key={idx} 
                  className={
                    line.startsWith('✓') || line.startsWith('🎉') 
                      ? 'text-emerald-400 font-semibold' 
                      : line.startsWith('▶') || line.startsWith('$')
                      ? 'text-indigo-300 font-semibold mt-2'
                      : 'text-neutral-400'
                  }
                >
                  {line}
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Web Terminal */}
          <div className="lg:col-span-6 flex flex-col rounded-2xl bg-neutral-900/70 border border-neutral-800 overflow-hidden">
            <div className="px-4 py-3 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-neutral-300 font-medium">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Interactive Cloud & Shell Sandbox</span>
              </div>
              <span className="text-[11px] text-neutral-400">bash 5.2</span>
            </div>

            <div className="p-4 font-mono text-xs bg-neutral-950 flex-1 h-80 overflow-y-auto flex flex-col justify-between">
              <div className="space-y-1.5 mb-2">
                {terminalHistory.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={item.isCmd ? 'text-cyan-300 font-semibold' : 'text-neutral-400 whitespace-pre-wrap'}
                  >
                    {item.text}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Command quick chips */}
              <div className="pt-2 border-t border-neutral-800/80 mb-2">
                <div className="text-[10px] text-neutral-400 mb-1">Click quick command:</div>
                <div className="flex flex-wrap gap-1.5">
                  {['cat about.yml', 'docker ps', 'kubectl get pods', 'python test.py', 'clear'].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => setTerminalInput(cmd)}
                      className="px-2 py-0.5 rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-[10px] text-neutral-300 transition-colors"
                    >
                      {cmd}
                    </button>
                  ))}
                </div>
              </div>

              {/* Terminal Form */}
              <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-1 border-t border-neutral-800/80">
                <span className="text-emerald-400 shrink-0">akash@devops:~$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="Type a command (try 'help' or 'docker ps')..."
                  className="flex-1 bg-transparent text-white text-xs focus:outline-none placeholder-neutral-600"
                />
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
