export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  hasInteractiveDemo?: boolean;
  interactiveType?: 'catchmydream' | 'deepfake' | 'lapvantage' | 'tomato';
  metrics?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  highlights?: string[];
}

export interface AchievementItem {
  title: string;
  issuer: string;
  period?: string;
  description: string;
  category: 'Certification' | 'Academic' | 'Hackathon' | 'Accomplishment';
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  updatedAt: string;
}
