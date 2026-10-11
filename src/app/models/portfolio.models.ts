export interface Experience {
  id: string;
  role: string;
  company: string;
  period?: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade?: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  category: 'Web' | 'Mobile' | 'Backend' | 'Systems' | 'Architecture';
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SpokenLanguage {
  name: string;
  proficiency: string;
  note?: string;
}
