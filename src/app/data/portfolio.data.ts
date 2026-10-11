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
    role: 'Software Engineer, Apps Developer',
    company: 'Embention',
    period: 'Jun 2026 — Present',
    location: 'Alicante, Spain',
    description: 'Develop and maintain desktop and web applications for the control, configuration, and monitoring of safety-critical autopilots, avionics, and ground control solutions for autonomous drones and eVTOL aircraft.',
    highlights: [
      'Implement cross-platform desktop and web applications utilizing technologies such as Java, Angular, Go, TypeScript, and Wails.'
    ],
    technologies: ['Java', 'Angular', 'Go', 'TypeScript', 'Wails']
  },
  {
    id: 'exp-tutoring',
    role: 'Programming Tutor & Instructor',
    company: 'Private Lessons',
    location: 'Online',
    description: 'Delivered private programming lessons to university undergraduate and vocational training students, focusing on Python, Java, PHP, and C++.',
    highlights: [],
    technologies: ['Python', 'Java', 'PHP', 'C++']
  },
  {
    id: 'exp-dual-link',
    role: 'Computer Engineering Internship',
    company: 'Dual Link',
    period: 'Feb 2023 — Jul 2023',
    location: "Sant Joan d'Alacant, Spain",
    description: 'Developed native iOS applications using Swift and designed and implemented an AI-driven tool to streamline application translation and localization.',
    highlights: [],
    technologies: ['Swift', 'iOS', 'AI', 'Localization']
  }
];

export const EDUCATIONS: Education[] = [
  {
    id: 'edu-mobile',
    degree: 'Master of Software Development for Mobile Devices',
    institution: 'University of Alicante',
    period: '2024 — 2025',
    location: 'Alicante, Spain',
    highlights: [
      'Desarrolló aplicaciones nativas para Android e iOS, además de aplicaciones móviles multiplataforma.',
      'Desarrolló juegos nativos para iOS y juegos para Android con Unity.',
      'Trabajó con Swift y Kotlin y exploró arquitecturas móviles y frameworks multiplataforma.',
      'Trabajo de fin de máster: diseñó y desarrolló Caishen Manager, una aplicación multiplataforma de finanzas personales.'
    ]
  },
  {
    id: 'edu-computer-engineering',
    degree: "Bachelor's Degree in Computer Engineering",
    institution: 'University of Alicante',
    period: '2020 — 2024',
    location: 'Alicante, Spain',
    highlights: [
      'Estudió lenguajes de programación y frameworks, pruebas de software, análisis de sistemas y gestión de proyectos.',
      'Adquirió una base amplia de ingeniería del software para adaptarse a nuevas tecnologías, proyectos y equipos multidisciplinares.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-liber',
    title: 'Liber Platform',
    subtitle: 'Movie Social Network',
    description: 'Full-stack social network and movie database with discussion forums, private messaging, user reviews, customizable movie lists, and detailed film, director, and cast pages.',
    longDescription: 'Engineered a full-stack social network and movie database featuring discussion forums, real-time private messaging, user reviews, customizable movie lists, and detailed pages for films, directors, and cast. Designed and optimized relational database schemas to manage user-generated content and media metadata.',
    tags: ['Laravel', 'PHP', 'PostgreSQL', 'Bootstrap'],
    featured: true,
    category: 'Web'
  },
  {
    id: 'proj-caishen',
    title: 'Caishen Manager',
    subtitle: 'Personal Finance App',
    description: 'Cross-platform application to manage personal finances, track income and expenses, monitor debts, and split shared costs among users.',
    longDescription: 'Developed a cross-platform personal finance application to manage finances, track income and expenses, monitor debts, and split shared costs among users. Integrated backend services and serverless logic for real-time data synchronization and secure authentication.',
    tags: ['Ionic', 'React', 'TypeScript', 'Supabase', 'Lambda'],
    featured: true,
    category: 'Mobile'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'Kotlin', 'TypeScript', 'JavaScript', 'Python', 'Go', 'Swift', 'HTML', 'CSS']
  },
  {
    title: 'Frameworks',
    skills: ['Angular', 'Ionic', 'Laravel', 'Spring Boot', 'React', 'Symfony', 'Unity']
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Android Studio', 'Xcode', 'VS Code']
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase', 'Firebase']
  },
  {
    title: 'Areas of Interest',
    skills: ['Web Development', 'Cross-Platform Apps', 'Native Android', 'Native iOS']
  },
  {
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Self-Learning', 'Adaptability', 'Analysis', 'Group Management']
  }
];

export const SPOKEN_LANGUAGES: SpokenLanguage[] = [
  { name: 'Armenio', proficiency: 'Mi idioma nativo', note: 'Uso personal y familiar' },
  { name: 'Español', proficiency: 'Casi nativo', note: 'Uso profesional, académico y personal' },
  { name: 'Inglés', proficiency: 'Nivel profesional', note: 'Uso profesional, académico y personal' },
  { name: 'Ruso', proficiency: 'Casi nativo', note: 'Uso personal' },
  { name: 'Valenciano/Catalán', proficiency: 'Nivel básico', note: 'Uso personal y académico' },
  {
    name: 'Chino mandarín',
    proficiency: 'Nivel muy básico',
    note: 'Aprendiendo; con ganas de seguir avanzando'
  }
];
