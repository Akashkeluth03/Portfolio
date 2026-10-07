import { Project, TechItem, UniversityOption, AudioSample } from '../types';

export const PERSONAL_INFO = {
  name: 'Akash Keluth',
  degree: 'Information Science & Engineering',
  institution: 'Ramaiah Institute of Technology (MSRIT)',
  email: 'akashkeluth03@gmail.com',
  githubUsername: 'Akashkeluth03',
  githubUrl: 'https://github.com/Akashkeluth03',
  taglines: [
    'Information Science & Engineering Student',
    'Python Developer & ML Practitioner',
    'Building Scalable Cloud & DevOps Systems',
    'Audio Forensics & Intelligent Web Architecture'
  ],
  bio: `Information Science & Engineering scholar passionate about building production-ready intelligent systems. Currently researching deepfake audio detection using MFCC/LFCC spectral analysis and developing Catch My Dream, an international student relocation and university insights portal. Experienced in Python development, cloud infrastructure on AWS, container orchestration with Docker & Kubernetes, and modern full-stack web applications.`,
  status: 'Open for Collaborations & Tech Discussions',
  location: 'Bangalore, India'
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'deepfake-audio',
    title: 'Deepfake Audio Detection',
    tagline: 'Acoustic authentication system detecting human vs. AI synthesized audio',
    description: 'An AI-driven forensic acoustic authentication pipeline built with Python, Librosa, and Scikit-Learn. Extracts Mel-Frequency Cepstral Coefficients (MFCC) and Linear Frequency Cepstral Coefficients (LFCC) to isolate subtle spectral flattening, phase discontinuity, and vocoder artifacts in synthetic speech.',
    category: 'ml',
    tags: ['Python', 'Scikit-Learn', 'Librosa', 'Google Colab', 'MFCC & LFCC', 'Signal Processing'],
    githubUrl: 'https://github.com/Akashkeluth03',
    demoType: 'deepfake',
    featured: true,
    highlights: [
      'Dual-stream spectral feature extraction (13-dim MFCC + 20-dim LFCC)',
      'High accuracy discrimination against modern neural vocoders (HiFi-GAN, WaveNet)',
      'Automated pitch jitter and spectral centroid anomaly scoring'
    ],
    stats: { stars: 14, forks: 6, tests: '98.2% F1-Score' }
  },
  {
    id: 'catch-my-dream',
    title: 'Catch My Dream',
    tagline: 'Comprehensive global portal assisting international study-abroad aspirants',
    description: 'A full-stack web platform designed to streamline the international education journey. Provides verified university cutoffs, verified student housing rentals, country-wise part-time job & visa wage estimators, and realistic monthly commute cost projections.',
    category: 'fullstack',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Akashkeluth03/catchmydream1',
    demoType: 'catchmydream',
    featured: true,
    highlights: [
      'Interactive university search filtering by GRE/IELTS, tuition fees, and admission odds',
      'Verified rental accommodation directory with safety ratings and deposit calculators',
      'Visa-compliant student wage and living expense simulator'
    ],
    stats: { stars: 22, forks: 9, tests: 'Full-Stack v1.2' }
  },
  {
    id: 'devops-cloud-pipeline',
    title: 'Cloud & DevOps Automation Pipeline',
    tagline: 'Automated CI/CD with Docker multi-stage builds and Kubernetes orchestration',
    description: 'Production infrastructure template featuring automated linting, test suites, multi-stage Docker containerization, security vulnerability scanning with Trivy, and continuous deployment to AWS EC2 / ECS with rolling update strategies.',
    category: 'devops',
    tags: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Linux', 'Bash', 'CI/CD'],
    githubUrl: 'https://github.com/Akashkeluth03',
    demoType: 'devops',
    featured: true,
    highlights: [
      'Zero-downtime rolling deployment manifest for containerized microservices',
      'Automated Trivy vulnerability scanner preventing high-severity CVE deployments',
      'Optimized lightweight Alpine base images reducing container build footprint by 65%'
    ],
    stats: { stars: 18, forks: 5, tests: '42 CI Tests Passing' }
  },
  {
    id: 'dsa-toolkit',
    title: 'High-Performance DSA Algorithmic Toolkit',
    tagline: 'Optimized implementations of core data structures and graph algorithms',
    description: 'A curated repository of competitive programming solutions and algorithmic paradigms implemented in C++ and Python. Includes custom graph traversal visualizers, dynamic programming state trackers, and amortized complexity benchmarks.',
    category: 'dsa',
    tags: ['C++', 'Python', 'Algorithms', 'Data Structures', 'Graph Theory', 'Dynamic Programming'],
    githubUrl: 'https://github.com/Akashkeluth03',
    featured: false,
    highlights: [
      'Modular implementations of Dijkstra, Tarjan, Fenwick Tree, and Trie data structures',
      'Benchmarked execution runtimes against standard library containers',
      'Clear documentation of space-time asymptotic complexities'
    ],
    stats: { stars: 12, forks: 3, tests: '300+ Problems' }
  },
  {
    id: 'acoustic-feature-extractor',
    title: 'Librosa Acoustic Spectral Analyzer',
    tagline: 'NumPy-accelerated audio feature extraction library for speech synthesis research',
    description: 'A Python library providing rapid extraction of spectral flux, zero-crossing rates, chroma stft, and spectral roll-off matrices for machine learning model training on large speech datasets like ASVspoof.',
    category: 'ml',
    tags: ['Python', 'NumPy', 'SciPy', 'Librosa', 'Signal Processing', 'Audio AI'],
    githubUrl: 'https://github.com/Akashkeluth03',
    featured: false,
    highlights: [
      'Fast batch processing of WAV/FLAC audio files with parallel worker threads',
      'Normalized cepstral mean and variance normalization (CMVN) routines',
      'Export directly to Pandas DataFrames and Scikit-Learn training arrays'
    ],
    stats: { stars: 10, forks: 4, tests: 'v0.9.4' }
  },
  {
    id: 'scalable-rest-gateway',
    title: 'Distributed Microservice Gateway',
    tagline: 'Lightweight Node.js and Express API gateway with token-bucket rate limiting',
    description: 'A reverse proxy gateway handling authentication, request throttling, reverse caching, and load balancing across upstream services with structured JSON logging and health checks.',
    category: 'fullstack',
    tags: ['Node.js', 'Express', 'JWT', 'Rate Limiting', 'Docker', 'Redis'],
    githubUrl: 'https://github.com/Akashkeluth03',
    featured: false,
    highlights: [
      'In-memory sliding window rate limiter preventing API abuse',
      'Centralized JWT verification before passing traffic to internal services',
      'Docker Compose setup for turnkey local and staging deployment'
    ],
    stats: { stars: 15, forks: 7, tests: 'Production Ready' }
  }
];

export const TECH_ITEMS: TechItem[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    iconSlug: 'python',
    experienceLevel: 'Advanced',
    usageInProjects: ['Deepfake Audio Detection', 'Acoustic Feature Extractor', 'Automation Scripts'],
    description: 'Primary language for machine learning, data engineering, acoustic signal modeling with Librosa, and backend scripting.',
    sampleCode: 'import librosa\nsignal, sr = librosa.load("sample.wav", sr=16000)\nmfccs = librosa.feature.mfcc(y=signal, sr=sr, n_mfcc=13)'
  },
  {
    id: 'c-cpp',
    name: 'C / C++',
    category: 'languages',
    iconSlug: 'cpp',
    experienceLevel: 'Advanced',
    usageInProjects: ['DSA Toolkit', 'System Programming', 'Academic Coursework'],
    description: 'Foundational languages utilized for high-performance data structures, memory management, and competitive algorithm problem solving.',
    sampleCode: '#include <vector>\n#include <queue>\nusing namespace std;\n// Priority queue Dijkstra optimization'
  },
  {
    id: 'java',
    name: 'Java',
    category: 'languages',
    iconSlug: 'java',
    experienceLevel: 'Intermediate',
    usageInProjects: ['Object-Oriented Design', 'Enterprise Foundations'],
    description: 'Robust object-oriented programming for structural paradigms, design patterns, and enterprise software engineering.',
    sampleCode: 'public class AcousticNode {\n  private final double[] spectralVector;\n}'
  },
  {
    id: 'javascript',
    name: 'JavaScript / TS',
    category: 'languages',
    iconSlug: 'js',
    experienceLevel: 'Advanced',
    usageInProjects: ['Catch My Dream', 'Portfolio Web Apps', 'REST Gateway'],
    description: 'Core web technologies for dynamic user interfaces, asynchronous runtime orchestration, and full-stack application development.'
  },
  {
    id: 'react',
    name: 'React',
    category: 'fullstack',
    iconSlug: 'react',
    experienceLevel: 'Advanced',
    usageInProjects: ['Catch My Dream Frontend', 'Interactive Portfolio UI'],
    description: 'Component-driven front-end engineering with React 19, custom hooks, dynamic state machines, and responsive layouts.'
  },
  {
    id: 'nodejs',
    name: 'Node.js & Express',
    category: 'fullstack',
    iconSlug: 'nodejs',
    experienceLevel: 'Advanced',
    usageInProjects: ['Catch My Dream Backend', 'Distributed Microservice Gateway'],
    description: 'High-throughput event-driven backend APIs with Express, JWT middleware, and asynchronous database pipelines.'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'fullstack',
    iconSlug: 'mongodb',
    experienceLevel: 'Advanced',
    usageInProjects: ['Catch My Dream Database', 'User Session Storage'],
    description: 'NoSQL document store for university directories, verified apartment listings, and scalable application document persistence.'
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    iconSlug: 'docker',
    experienceLevel: 'Advanced',
    usageInProjects: ['Microservice Containerization', 'CI/CD Pipeline', 'Catch My Dream'],
    description: 'Containerizing fullstack applications with multi-stage Dockerfiles, Docker Compose, and environment isolation.',
    sampleCode: 'FROM node:20-alpine AS build\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci'
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'devops',
    iconSlug: 'kubernetes',
    experienceLevel: 'Actively Leveling Up',
    usageInProjects: ['DevOps Orchestration', 'Microservice Pods Deployment'],
    description: 'Container orchestration, declarative Pod/Service YAML manifests, ingress routing, and horizontal pod autoscaling principles.'
  },
  {
    id: 'aws',
    name: 'Amazon Web Services (AWS)',
    category: 'devops',
    iconSlug: 'aws',
    experienceLevel: 'Intermediate',
    usageInProjects: ['Cloud Architecture Deployment', 'S3 Asset Hosting', 'EC2 Staging'],
    description: 'Deploying scalable services on EC2, S3 bucket storage for audio datasets, IAM security boundaries, and VPC networking.'
  },
  {
    id: 'linux',
    name: 'Linux / Bash',
    category: 'devops',
    iconSlug: 'linux',
    experienceLevel: 'Advanced',
    usageInProjects: ['Server Administration', 'Automation Scripts', 'Daily Driver OS'],
    description: 'Deep familiarity with POSIX command line, shell automation scripts, process supervision (systemd), and SSH remote administration.'
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'devops',
    iconSlug: 'git',
    experienceLevel: 'Advanced',
    usageInProjects: ['All Repositories', 'Branching Strategies', 'GitHub Actions'],
    description: 'Version control mastery: feature branch workflows, rebase hygiene, automated GitHub Actions, and collaborative pull requests.'
  },
  {
    id: 'jenkins',
    name: 'Jenkins CI/CD',
    category: 'devops',
    iconSlug: 'jenkins',
    experienceLevel: 'Intermediate',
    usageInProjects: ['DevOps Automation Pipeline', 'Nightly Build System'],
    description: 'Continuous integration pipelines with scripted and declarative Jenkinsfiles, automated test triggers, and artifact deployment.'
  },
  {
    id: 'scikit-learn',
    name: 'Scikit-Learn',
    category: 'ml',
    iconSlug: 'scikitlearn',
    experienceLevel: 'Advanced',
    usageInProjects: ['Deepfake Audio Detection', 'Acoustic Classifier Models'],
    description: 'Machine learning classification algorithms: Random Forest ensembles, Support Vector Machines (SVM), cross-validation, and metrics (F1-score, ROC-AUC).'
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow & Deep Learning',
    category: 'ml',
    iconSlug: 'tensorflow',
    experienceLevel: 'Actively Leveling Up',
    usageInProjects: ['Deepfake Audio Detection CNNs', 'Acoustic Spectrogram Classification'],
    description: 'Designing convolutional neural networks for spectrogram image classification, loss optimization, and transfer learning.'
  }
];

export const AUDIO_SAMPLES: AudioSample[] = [
  {
    id: 'sample-human-1',
    title: 'Natural Human Speech (Vocal Resonance)',
    type: 'human',
    source: 'Studio Microphone (16kHz PCM)',
    duration: '3.4s',
    sampleDescription: 'Natural acoustic recording characterized by natural vocal jitter, authentic glottal airflow harmonics, and consistent LFCC spectral tilt.',
    baseFreq: 185,
    jitter: 0.012,
    lfccTilt: -18.4,
    mfccVariance: 42.1,
    groundTruth: 'Authentic Human Voice',
    modelConfidence: 98.4
  },
  {
    id: 'sample-deepfake-1',
    title: 'AI Voice Clone (HiFi-GAN Vocoder)',
    type: 'synthetic',
    source: 'Neural TTS Voice Synthesis',
    duration: '3.1s',
    sampleDescription: 'Synthesized voice model clone showing unnatural high-frequency harmonic flattening and subtle phase boundary discontinuities.',
    baseFreq: 220,
    jitter: 0.002,
    lfccTilt: -6.2,
    mfccVariance: 18.5,
    groundTruth: 'Deepfake Synthesized Audio',
    modelConfidence: 96.8
  },
  {
    id: 'sample-deepfake-2',
    title: 'Cloned Speech with Injected Room Reverb',
    type: 'synthetic',
    source: 'Diffusion Acoustic Generator',
    duration: '2.8s',
    sampleDescription: 'Synthetic audio engineered with artificial room impulse response to mask spectral artifacts; detected via 13-dim MFCC distribution anomaly.',
    baseFreq: 195,
    jitter: 0.003,
    lfccTilt: -8.1,
    mfccVariance: 22.3,
    groundTruth: 'Deepfake Synthesized Audio',
    modelConfidence: 94.2
  },
  {
    id: 'sample-human-2',
    title: 'Real Human Conversational Dialogue',
    type: 'human',
    source: 'Clean Speech Corpus',
    duration: '4.0s',
    sampleDescription: 'Spontaneous human conversational utterance featuring organic breath pauses, dynamic pitch excursions, and authentic formants.',
    baseFreq: 140,
    jitter: 0.015,
    lfccTilt: -21.3,
    mfccVariance: 48.7,
    groundTruth: 'Authentic Human Voice',
    modelConfidence: 99.1
  }
];

export const UNIVERSITIES_DATA: UniversityOption[] = [
  {
    id: 'tum-munich',
    name: 'Technical University of Munich (TUM)',
    country: 'Germany',
    flag: '🇩🇪',
    tuitionPerYear: '€0 - €1,500 / year (Nominal admin fees)',
    tuitionNum: 1500,
    acceptanceRate: '24%',
    ieltsMin: 6.5,
    greMin: 310,
    popularPrograms: ['Informatics / CS', 'Data Engineering', 'Robotics & AI'],
    avgRent: '€650 - €950 / month',
    partTimeMinWage: '€12.82 / hour (20 hrs/week allowed)'
  },
  {
    id: 'univ-toronto',
    name: 'University of Toronto',
    country: 'Canada',
    flag: '🇨🇦',
    tuitionPerYear: '$48,000 CAD / year',
    tuitionNum: 35000,
    acceptanceRate: '43%',
    ieltsMin: 7.0,
    greMin: 318,
    popularPrograms: ['Computer Science', 'Machine Learning', 'Cloud Systems'],
    avgRent: '$1,200 - $1,700 CAD / month',
    partTimeMinWage: '$16.55 CAD / hour (20 hrs/week)'
  },
  {
    id: 'uw-seattle',
    name: 'University of Washington (UW)',
    country: 'United States',
    flag: '🇺🇸',
    tuitionPerYear: '$41,500 USD / year',
    tuitionNum: 41500,
    acceptanceRate: '38%',
    ieltsMin: 7.0,
    greMin: 320,
    popularPrograms: ['Information Systems', 'Computer Engineering', 'Data Science'],
    avgRent: '$1,100 - $1,600 USD / month',
    partTimeMinWage: '$19.97 USD / hour (On-campus)'
  },
  {
    id: 'kth-stockholm',
    name: 'KTH Royal Institute of Technology',
    country: 'Sweden',
    flag: '🇸🇪',
    tuitionPerYear: 'SEK 155,000 / year (~$15,000 USD)',
    tuitionNum: 15000,
    acceptanceRate: '32%',
    ieltsMin: 6.5,
    greMin: 312,
    popularPrograms: ['Machine Learning', 'Software Engineering of Distributed Systems'],
    avgRent: 'SEK 6,500 - 9,000 / month',
    partTimeMinWage: 'No legal hourly cap for degree students'
  },
  {
    id: 'nus-singapore',
    name: 'National University of Singapore (NUS)',
    country: 'Singapore',
    flag: '🇸🇬',
    tuitionPerYear: '$28,000 SGD / year',
    tuitionNum: 21000,
    acceptanceRate: '15%',
    ieltsMin: 6.5,
    greMin: 322,
    popularPrograms: ['Master of Computing - AI', 'Infocomm Technology'],
    avgRent: '$800 - $1,400 SGD / month',
    partTimeMinWage: '$14 - $20 SGD / hour (16 hrs/week)'
  },
  {
    id: 'melbourne-uni',
    name: 'University of Melbourne',
    country: 'Australia',
    flag: '🇦🇺',
    tuitionPerYear: '$46,000 AUD / year',
    tuitionNum: 30000,
    acceptanceRate: '40%',
    ieltsMin: 6.5,
    greMin: 310,
    popularPrograms: ['Master of Information Technology', 'Software Systems'],
    avgRent: '$1,000 - $1,500 AUD / month',
    partTimeMinWage: '$23.23 AUD / hour (48 hrs/fortnight)'
  }
];
