import type { TranslationId } from '../services/portfolio-preferences.service';

export interface Experience {
  id: string;
  role: TranslationId;
  company: string;
  period?: TranslationId;
  location: TranslationId;
  description: TranslationId;
  highlights: TranslationId[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: TranslationId;
  institution: string;
  period: TranslationId;
  location: TranslationId;
  grade?: TranslationId;
  highlights: TranslationId[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: TranslationId;
  description: TranslationId;
  longDescription: TranslationId;
  tags: string[];
  images: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  category: 'Web' | 'Mobile';
}

export interface SkillCategory {
  title: TranslationId;
  skills: string[];
}

export interface SpokenLanguage {
  name: TranslationId;
  proficiency: TranslationId;
  note?: TranslationId;
}
