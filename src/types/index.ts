export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'ml' | 'fullstack' | 'devops' | 'dsa';
  tags: string[];
  githubUrl: string;
  demoType?: 'deepfake' | 'catchmydream' | 'devops' | 'external';
  externalUrl?: string;
  featured: boolean;
  highlights: string[];
  stats?: { stars?: number; forks?: number; tests?: string };
}

export interface TechItem {
  id: string;
  name: string;
  category: 'languages' | 'fullstack' | 'devops' | 'ml';
  iconSlug: string;
  experienceLevel: 'Advanced' | 'Intermediate' | 'Actively Leveling Up';
  usageInProjects: string[];
  description: string;
  sampleCode?: string;
}

export interface UniversityOption {
  id: string;
  name: string;
  country: string;
  flag: string;
  tuitionPerYear: string;
  tuitionNum: number;
  acceptanceRate: string;
  ieltsMin: number;
  greMin?: number;
  popularPrograms: string[];
  avgRent: string;
  partTimeMinWage: string;
}

export interface AudioSample {
  id: string;
  title: string;
  type: 'human' | 'synthetic';
  source: string;
  duration: string;
  sampleDescription: string;
  baseFreq: number;
  jitter: number;
  lfccTilt: number;
  mfccVariance: number;
  groundTruth: 'Authentic Human Voice' | 'Deepfake Synthesized Audio';
  modelConfidence: number;
}
