import { Education, Experience, Project, SkillCategory, SpokenLanguage } from '../models/portfolio.models';

export const CONTACT = {
  phone: '+34 602 615107',
  email: 'erik.avagyan.eng@gmail.com',
  githubUrl: 'https://github.com/erik-avagyan',
  linkedInUrl: 'https://www.linkedin.com/in/erik-avagyan-77331126a/'
} as const;

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-embention',
    role: 'experience.embention.role',
    company: 'Embention',
    period: 'experience.embention.period',
    location: 'experience.embention.location',
    description: 'experience.embention.description',
    highlights: [
      'experience.embention.highlight.1',
      'experience.embention.highlight.2'
    ],
    technologies: ['Java', 'Angular', 'Go', 'TypeScript', 'Wails']
  },
  {
    id: 'exp-tutoring',
    role: 'experience.tutoring.role',
    company: 'Private Lessons',
    location: 'experience.tutoring.location',
    description: 'experience.tutoring.description',
    highlights: ['experience.tutoring.highlight.1'],
    technologies: ['Python', 'Java', 'PHP', 'Laravel', 'Symfony', 'C++']
  },
  {
    id: 'exp-dual-link',
    role: 'experience.duallink.role',
    company: 'Dual Link',
    period: 'experience.duallink.period',
    location: 'experience.duallink.location',
    description: 'experience.duallink.description',
    highlights: ['experience.duallink.highlight.1', 'experience.duallink.highlight.2'],
    technologies: ['Swift', 'iOS', 'AI', 'Localization']
  }
];

export const EDUCATIONS: Education[] = [
  {
    id: 'edu-mobile',
    degree: 'education.master.degree',
    institution: 'University of Alicante',
    period: 'education.master.period',
    location: 'education.location',
    highlights: [
      'education.master.highlight.1',
      'education.master.highlight.2',
      'education.master.highlight.3',
      'education.master.highlight.4'
    ]
  },
  {
    id: 'edu-computer-engineering',
    degree: 'education.bachelor.degree',
    institution: 'University of Alicante',
    period: 'education.bachelor.period',
    location: 'education.location',
    highlights: [
      'education.bachelor.highlight.1',
      'education.bachelor.highlight.2',
      'education.bachelor.highlight.3'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-liber',
    title: 'Liber Platform',
    subtitle: 'projects.liber.subtitle',
    description: 'projects.liber.description',
    longDescription: 'projects.liber.longDescription',
    tags: ['Laravel', 'PHP', 'PostgreSQL', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'],
    featured: true,
    category: 'Web'
  },
  {
    id: 'proj-caishen',
    title: 'Caishen Manager',
    subtitle: 'projects.caishen.subtitle',
    description: 'projects.caishen.description',
    longDescription: 'projects.caishen.longDescription',
    tags: ['Ionic', 'React', 'TypeScript', 'Supabase', 'Lambda'],
    featured: true,
    category: 'Mobile'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'skills.category.languages',
    skills: ['Java','TypeScript','JavaScript', 'Python', 'Go', 'Kotlin', 'Swift', 'HTML', 'CSS']
  },
  {
    title: 'skills.category.frameworks',
    skills: ['Angular', 'Ionic', 'Laravel', 'Spring Boot', 'React', 'Symfony', 'Android Native', 'iOS Native']
  },
  {
    title: 'skills.category.tools',
    skills: ['Git', 'GitHub', 'Android Studio', 'Xcode', 'VS Code', 'Postman', 'Swagger' ]
  },
  {
    title: 'skills.category.databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase', 'Firebase']
  },
  {
    title: 'skills.category.interests',
    skills: ['Web Development', 'Cross-Platform Apps', 'Native Android', 'Native iOS']
  },
  {
    title: 'skills.category.softSkills',
    skills: ['Problem Solving', 'Self-Learning', 'Adaptability', 'Analysis', 'Group Management']
  }
];

export const SPOKEN_LANGUAGES: SpokenLanguage[] = [
  { name: 'languages.armenian.name', proficiency: 'languages.armenian.level', note: 'languages.armenian.note' },
  { name: 'languages.spanish.name', proficiency: 'languages.spanish.level', note: 'languages.spanish.note' },
  { name: 'languages.english.name', proficiency: 'languages.english.level', note: 'languages.english.note' },
  { name: 'languages.russian.name', proficiency: 'languages.russian.level', note: 'languages.russian.note' },
  { name: 'languages.valencian.name', proficiency: 'languages.valencian.level', note: 'languages.valencian.note' },
  {
    name: 'languages.mandarin.name',
    proficiency: 'languages.mandarin.level',
    note: 'languages.mandarin.note'
  }
];
