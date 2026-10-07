import { Project, SkillCategory, EducationItem, AchievementItem, GitHubRepo } from '../types';

export const PERSONAL_DATA = {
  name: 'Akash',
  title: 'Information Science Engineering Student | Software Developer',
  description: 'Passionate about building practical software solutions, exploring full-stack development, DevOps, machine learning, and modern technologies.',
  email: 'akashkeluth03@gmail.com',
  github: 'https://github.com/Akashkeluth03',
  linkedin: 'https://linkedin.com/in/akashkeluth',
  instagram: 'https://instagram.com/akashkeluth',
  location: 'Bengaluru, India',
  status: 'Open to internships, research, & software development roles',
  about: {
    lead: "I'm an Information Science and Engineering student at M S Ramaiah Institute of Technology with a strong foundation in computer science and practical software development.",
    paragraphs: [
      "My work spans full-stack web engineering, cloud-native DevOps pipelines, and applied machine learning. I enjoy taking an idea from architectural design to containerized deployment, focusing on clean code, system reliability, and intuitive user experiences.",
      "With a background spanning both a polytechnic diploma and engineering degree, I approach software with rigorous problem-solving fundamentals—having solved 300+ data structures and algorithmic challenges. When I'm not coding, I'm exploring new developer tooling, acoustic signal processing, and scalable distributed systems."
    ],
    highlights: [
      'B.E. in Information Science & Engineering (MSRIT)',
      'Full-Stack Architecture (React, Next.js, Node.js, PostgreSQL)',
      'DevOps & CI/CD (Docker, Jenkins, Kubernetes, AWS)',
      'Machine Learning & Audio Forensics (Scikit-learn, Librosa)',
      'Solid Algorithmic Problem Solving (C++, Python)'
    ]
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js']
  },
  {
    title: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'Prisma']
  },
  {
    title: 'DevOps',
    skills: ['Docker', 'Jenkins', 'Git', 'GitHub', 'SonarQube', 'Trivy']
  },
  {
    title: 'Machine Learning',
    skills: ['Scikit-learn', 'NumPy', 'Librosa']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'catchmydream',
    title: 'CatchMyDream / Study in Asia',
    description: 'An education platform designed to help international students discover universities, courses, accommodations, and career opportunities across Asia.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'Jenkins'],
    githubUrl: 'https://github.com/Akashkeluth03/catchmydream1',
    liveDemoUrl: '#catchmydream-demo',
    hasInteractiveDemo: true,
    interactiveType: 'catchmydream',
    metrics: 'Production v1.2'
  },
  {
    id: 'deepfake-audio',
    title: 'Deepfake Audio Detection System',
    description: 'Machine learning based system for detecting manipulated or deepfake audio using MFCC and LFCC features.',
    tech: ['Python', 'Librosa', 'NumPy', 'Scikit-learn', 'SVM', 'Random Forest', 'Logistic Regression'],
    githubUrl: 'https://github.com/Akashkeluth03',
    liveDemoUrl: '#deepfake-demo',
    hasInteractiveDemo: true,
    interactiveType: 'deepfake',
    metrics: '98.2% F1-Score'
  },
  {
    id: 'tomato-delivery',
    title: 'Tomato Food Delivery',
    description: 'Full-stack food delivery application with restaurant browsing, food ordering, authentication, and backend APIs.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    githubUrl: 'https://github.com/Akashkeluth03',
    liveDemoUrl: '#tomato-demo',
    hasInteractiveDemo: true,
    interactiveType: 'tomato',
    metrics: 'Full-Stack MERN'
  },
  {
    id: 'lapvantage-ai',
    title: 'LapVantage AI',
    description: 'Machine learning project that predicts laptop prices based on hardware and product specifications.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest'],
    githubUrl: 'https://github.com/Akashkeluth03',
    liveDemoUrl: '#lapvantage-demo',
    hasInteractiveDemo: true,
    interactiveType: 'lapvantage',
    metrics: 'R² 0.89 Accuracy'
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: 'B.E. Information Science and Engineering',
    institution: 'M S Ramaiah Institute of Technology, Bengaluru',
    period: '2024 – Present',
    location: 'Bengaluru, Karnataka',
    highlights: [
      'Focus on Data Structures, Database Systems, Cloud Computing, and Machine Learning',
      'Active contributor to departmental technical forums and open-source initiatives'
    ]
  },
  {
    degree: 'Diploma in Computer Science and Engineering',
    institution: 'Government Polytechnic, Ballari',
    period: '2021 – 2024',
    location: 'Ballari, Karnataka',
    highlights: [
      'Graduated with distinction in core Computer Science fundamentals',
      'Deep training in C/C++, Java, Relational Databases, and Linux system fundamentals'
    ]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: '300+ Algorithmic Problems Solved',
    issuer: 'Competitive Programming & DSA',
    period: '2023 – Present',
    description: 'Demonstrated mastery in Graph Algorithms, Dynamic Programming, and Tree data structures across LeetCode & HackerRank.',
    category: 'Accomplishment'
  },
  {
    title: 'Machine Learning & Acoustic Signal Processing',
    issuer: 'Research & Applied ML',
    period: '2024',
    description: 'Researched MFCC/LFCC cepstral feature representations to detect synthetic speech generated by neural vocoders.',
    category: 'Certification'
  },
  {
    title: 'DevOps & Container Security Gate Implementation',
    issuer: 'Continuous Integration & Cloud',
    period: '2024',
    description: 'Implemented multi-stage Docker builds, Trivy vulnerability auditing, and automated Jenkins pipelines.',
    category: 'Academic'
  },
  {
    title: 'Full-Stack MERN & Next.js Architecture',
    issuer: 'Web Engineering Projects',
    period: '2024',
    description: 'Built production-grade REST APIs, JWT authentication, and responsive client applications with PostgreSQL/MongoDB.',
    category: 'Certification'
  }
];

export const GITHUB_REPOS: GitHubRepo[] = [
  {
    name: 'catchmydream1',
    description: 'Education platform for international students to discover universities, housing, and career options.',
    language: 'TypeScript',
    stars: 12,
    forks: 4,
    url: 'https://github.com/Akashkeluth03/catchmydream1',
    updatedAt: 'Recently updated'
  },
  {
    name: 'Deepfake-Audio-Detection',
    description: 'Acoustic authentication system using MFCC & LFCC spectral features with Scikit-learn classifiers.',
    language: 'Python',
    stars: 8,
    forks: 3,
    url: 'https://github.com/Akashkeluth03',
    updatedAt: 'Active research'
  },
  {
    name: 'Tomato-Food-Delivery',
    description: 'Full-stack food ordering platform with restaurant catalog, shopping cart, and authentication.',
    language: 'JavaScript',
    stars: 7,
    forks: 2,
    url: 'https://github.com/Akashkeluth03',
    updatedAt: 'Maintained'
  },
  {
    name: 'LapVantage-AI-Predictor',
    description: 'Machine learning regression model predicting market laptop pricing from hardware specs.',
    language: 'Python',
    stars: 6,
    forks: 1,
    url: 'https://github.com/Akashkeluth03',
    updatedAt: 'Maintained'
  },
  {
    name: 'Portfolio',
    description: 'Modern, clean developer portfolio built with React, TypeScript, and Tailwind CSS.',
    language: 'TypeScript',
    stars: 5,
    forks: 1,
    url: 'https://github.com/Akashkeluth03/Portfolio',
    updatedAt: 'Current'
  }
];
