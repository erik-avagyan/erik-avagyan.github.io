import { Injectable, signal } from '@angular/core';

export type Language = 'es' | 'en';
export type Theme = 'dark' | 'light';

const SPANISH_TO_ENGLISH: Record<string, string> = {
  'Ingeniero de Software con formación en ingeniería informática y desarrollo de aplicaciones móviles.': 'Software Engineer with an academic background in Computer Engineering and mobile application development.',
  'Trabajo en Embention, en el equipo de Apps & Cloud, desarrollando software web y de escritorio para sistemas aeronáuticos autónomos y críticos para la seguridad.': 'I work at Embention as part of the Apps & Cloud team, developing desktop and web software for autonomous and safety-critical aerospace systems.',
  'Mi experiencia abarca el desarrollo frontend y backend, desde interfaces intuitivas hasta servicios escalables.': 'My experience spans frontend and backend development, from intuitive interfaces to scalable services.',
  'Mi formación me permite adaptarme con rapidez a nuevas tecnologías, proyectos y equipos multidisciplinares.': 'My education enables me to adapt quickly to new technologies, projects, and multidisciplinary teams.',
  'Construyo aplicaciones web y de escritorio para sistemas autónomos.': 'I build web and desktop applications for autonomous systems.',
  'Ingeniero de Software · Equipo de Apps en Embention': 'Software Engineer · Apps Team at Embention',
  ' desarrolla aplicaciones multiplataforma para el control, configuración y monitorización de drones autónomos y aeronaves eVTOL en Embention.': ' is an Apps Team Software Engineer at Embention, developing cross-platform applications to control, configure, and monitor autonomous drones and eVTOL aircraft.',
  'Imagen de Erik Avagyan': 'Photo of Erik Avagyan',
  'Ingeniero de Software · Alicante, España': 'Software Engineer · Alicante, Spain',

  'Trayectoria': 'Career',
  'Experiencia Profesional': 'Professional Experience',
  'Enfoque en aplicaciones web, de escritorio y móviles para sistemas autónomos.': 'Focused on web, desktop, and mobile applications for autonomous systems.',
  'Ingeniero de Software, desarrollador de aplicaciones': 'Software Engineer, Apps Developer',
  'Jun 2026 — Presente': 'Jun 2026 — Present',
  'Alicante, España': 'Alicante, Spain',
  'Desarrolla y mantiene aplicaciones de escritorio y web para controlar, configurar y monitorizar autopilotos y aviónica críticos para la seguridad, y soluciones de control en tierra para drones autónomos y aeronaves eVTOL.': 'Develop and maintain desktop and web applications for the control, configuration, and monitoring of safety-critical autopilots, avionics, and ground control solutions for autonomous drones and eVTOL aircraft.',
  'Implementa aplicaciones multiplataforma de escritorio y web con tecnologías como Java, Angular, Go, TypeScript y Wails.': 'Implement cross-platform desktop and web applications utilizing technologies such as Java, Angular, Go, TypeScript, and Wails.',
  'Tutor e instructor de programación': 'Programming Tutor & Instructor',
  'Clases particulares': 'Private Lessons',
  'En línea': 'Online',
  'Impartió clases particulares de programación a estudiantes universitarios y de formación profesional, con énfasis en Python, Java, PHP y C++.': 'Delivered private programming lessons to university undergraduate and vocational training students, focusing on Python, Java, PHP, and C++.',
  'Prácticas de Ingeniería Informática': 'Computer Engineering Internship',
  "Sant Joan d'Alacant, España": "Sant Joan d'Alacant, Spain",
  'Feb 2023 — Jul 2023': 'Feb 2023 — Jul 2023',
  'Desarrolló aplicaciones nativas para iOS con Swift y diseñó e implementó una herramienta basada en IA para agilizar la traducción y localización de aplicaciones.': 'Developed native iOS applications using Swift and designed and implemented an AI-driven tool to streamline application translation and localization.',

  'Formación Académica': 'Education',
  'Educación y Titulaciones': 'Education and Qualifications',
  'Máster en Desarrollo de Software para Dispositivos Móviles': 'Master of Software Development for Mobile Devices',
  'Grado en Ingeniería Informática': "Bachelor's Degree in Computer Engineering",
  'Universidad de Alicante': 'University of Alicante',
  '2024 — 2025': '2024 — 2025',
  '2020 — 2024': '2020 — 2024',
  'Desarrolló aplicaciones nativas para Android e iOS, además de aplicaciones móviles multiplataforma.': 'Built native Android and iOS applications, as well as cross-platform mobile apps.',
  'Desarrolló juegos nativos para iOS y juegos para Android con Unity.': 'Developed native iOS games and Android games with Unity.',
  'Trabajó con Swift y Kotlin y exploró arquitecturas móviles y frameworks multiplataforma.': 'Worked with Swift and Kotlin, and explored mobile architectures and cross-platform frameworks.',
  'Trabajo de fin de máster: diseñó y desarrolló Caishen Manager, una aplicación multiplataforma de finanzas personales.': "Master's thesis: designed and developed Caishen Manager, a cross-platform personal finance application.",
  'Estudió lenguajes de programación y frameworks, pruebas de software, análisis de sistemas y gestión de proyectos.': 'Studied programming languages and frameworks, software testing, systems analysis, and project management.',
  'Adquirió una base amplia de ingeniería del software para adaptarse a nuevas tecnologías, proyectos y equipos multidisciplinares.': 'Built a broad software engineering foundation that supports adapting to new technologies, projects, and multidisciplinary teams.',

  'Proyectos Destacados': 'Featured Projects',
  'Todos': 'All',
  'Móvil': 'Mobile',
  'Sistemas': 'Systems',
  'Arquitectura': 'Architecture',
  'Red social de cine': 'Movie Social Network',
  'Red social full-stack y base de datos cinematográfica con foros de debate, mensajería privada, reseñas, listas de películas personalizadas y páginas detalladas de películas, directores y reparto.': 'Full-stack social network and movie database with discussion forums, private messaging, user reviews, customizable movie lists, and detailed film, director, and cast pages.',
  'Desarrolló una red social full-stack y una base de datos cinematográfica con foros de debate, mensajería privada en tiempo real, reseñas, listas personalizadas y páginas detalladas de películas, directores y reparto. Diseñó y optimizó esquemas relacionales para gestionar contenido generado por usuarios y metadatos multimedia.': 'Engineered a full-stack social network and movie database featuring discussion forums, real-time private messaging, user reviews, customizable movie lists, and detailed pages for films, directors, and cast. Designed and optimized relational database schemas to manage user-generated content and media metadata.',
  'Aplicación de finanzas personales': 'Personal Finance App',
  'Aplicación multiplataforma para gestionar finanzas personales, registrar ingresos y gastos, controlar deudas y dividir gastos compartidos entre usuarios.': 'Cross-platform application to manage personal finances, track income and expenses, monitor debts, and split shared costs among users.',
  'Desarrolló una aplicación multiplataforma de finanzas personales para gestionar ingresos y gastos, controlar deudas y dividir gastos compartidos. Integró servicios backend y lógica serverless para sincronizar datos en tiempo real y ofrecer autenticación segura.': 'Developed a cross-platform personal finance application to manage finances, track income and expenses, monitor debts, and split shared costs among users. Integrated backend services and serverless logic for real-time data synchronization and secure authentication.',
  'Abrir repositorio de GitHub': 'Open GitHub repository',
  'Ver detalles técnicos': 'View technical details',
  'No hay proyectos en esta categoría todavía.': 'There are no projects in this category yet.',

  'Stack Técnico': 'Technical Stack',
  'Tecnologías y Lenguajes': 'Technologies and Languages',
  'Buscar tecnología': 'Search technologies',
  'Buscar tecnología...': 'Search technologies...',
  'No se encontraron tecnologías que coincidan con la búsqueda.': 'No technologies match your search.',
  'Lenguajes de programación': 'Programming Languages',
  'Unity': 'Unity',
  'Marcos de trabajo': 'Frameworks',
  'Herramientas': 'Tools',
  'Bases de datos': 'Databases',
  'Áreas de interés': 'Areas of Interest',
  'Idiomas': 'Spoken Languages',
  'Comunicación': 'Communication',
  'Idiomas que hablo': 'Languages I speak',
  'La comunicación entre culturas forma parte de quién soy. Estos son los idiomas que hablo y mi nivel en cada uno.': 'Cross-cultural communication is part of who I am. Here are the languages I speak and my proficiency in each.',
  'Armenio': 'Armenian',
  'Español': 'Spanish',
  'Inglés': 'English',
  'Ruso': 'Russian',
  'Valenciano/Catalán': 'Valencian/Catalan',
  'Chino mandarín': 'Mandarin Chinese',
  'Mi idioma nativo': 'My native language',
  'Casi nativo': 'Near-native',
  'Nivel profesional': 'Professional proficiency',
  'Nivel básico': 'Basic proficiency',
  'Nivel muy básico': 'Very basic proficiency',
  'Uso personal y familiar': 'Personal and family use',
  'Uso profesional, académico y personal': 'Professional, academic, and personal use',
  'Uso personal': 'Personal use',
  'Uso personal y académico': 'Personal and academic use',
  'Aprendiendo; con ganas de seguir avanzando': 'Currently learning, and eager to keep improving',
  'En aprendizaje': 'Currently learning',
  'Habilidades interpersonales': 'Soft Skills',
  'Armenio — Nativo': 'Armenian — Native',
  'Español — Nativo o bilingüe': 'Spanish — Native or Bilingual Proficiency',
  'Inglés — Competencia profesional': 'English — Professional Working Proficiency',
  'Ruso — Bilingüe': 'Russian — Bilingual Proficiency',
  'Catalán — Elemental': 'Catalan — Elementary Proficiency',
  'Resolución de problemas': 'Problem Solving',
  'Autoaprendizaje': 'Self-Learning',
  'Adaptabilidad': 'Adaptability',
  'Análisis': 'Analysis',
  'Gestión de grupos': 'Group Management',

  'Navegación principal': 'Main navigation',
  'Experiencia': 'Experience',
  'Estudios': 'Education',
  'Proyectos': 'Projects',
  'Tecnologías': 'Technologies',
  'Contacto': 'Contact',
  'Contactar': 'Contact',
  'Abrir o cerrar menú': 'Open or close menu',
  'Activar modo claro': 'Enable light mode',
  'Activar modo oscuro': 'Enable dark mode',
  'Modo claro': 'Light mode',
  'Modo oscuro': 'Dark mode',
  'Ponerse en contacto': 'Get in touch',
  'CV': 'Resume',
  'CV de Erik Avagyan': 'Erik Avagyan’s resume',
  'Descargar CV': 'Download resume',
  'Vista previa del CV de Erik Avagyan': 'Erik Avagyan’s resume preview',
  'Cargando CV…': 'Loading resume…',
  'No se pudo mostrar la vista previa. Puedes abrir o descargar el PDF.': 'The preview could not be displayed. You can open or download the PDF.',
  'Cerrar': 'Close',

  '¿Hablamos sobre un proyecto?': 'Let’s talk about a project',
  'Si quieres saber más sobre mi experiencia o mis proyectos, puedes escribirme o llamarme.': 'If you would like to learn more about my experience or projects, feel free to email or call me.',
  'Teléfono': 'Phone',
  'Llamar': 'Call',
  '¡Copiado!': 'Copied!',
  'No se pudo copiar': 'Could not copy',
  'Copiar Email': 'Copy email',
  'Desarrollado con Angular 19 & Tailwind CSS.': 'Built with Angular 19 & Tailwind CSS.',

  'Cerrar detalles': 'Close project details',
  'Tecnologías empleadas:': 'Technologies used:',
  'Ver Código en GitHub': 'View code on GitHub',
  'Cerrar ventana de contacto': 'Close contact dialog',
  'Contactar con Erik': 'Contact Erik',
  'Envíame un correo directo o conecta a través de mis redes profesionales.': 'Send me an email or connect with me through my professional profiles.',
  'Enviar correo electrónico': 'Send an email',
  'Perfil de LinkedIn': 'LinkedIn profile',
  'Perfil de GitHub': 'GitHub profile'
};

const ENGLISH_TO_SPANISH = Object.fromEntries(
  Object.entries(SPANISH_TO_ENGLISH).map(([spanish, english]) => [english, spanish])
);

const PAGE_TITLES = {
  es: 'Portfolio de Erik Avagyan | Ingeniero de Software',
  en: 'Erik Avagyan Portfolio | Software Engineer'
} as const;

const PAGE_DESCRIPTIONS = {
  es: 'Portfolio profesional de Erik Avagyan, ingeniero de software y miembro del equipo de aplicaciones de Embention.',
  en: 'Professional portfolio of Erik Avagyan, Software Engineer and Apps Team member at Embention.'
} as const;

@Injectable({ providedIn: 'root' })
export class PortfolioPreferencesService {
  readonly language = signal<Language>(this.readPreference('portfolio-language', 'es'));
  readonly theme = signal<Theme>(this.readPreference('portfolio-theme', 'dark'));

  constructor() {
    document.documentElement.dataset['theme'] = this.theme();
    this.updateDocumentLanguage(this.language());
  }

  toggleLanguage(): void {
    const language = this.language() === 'es' ? 'en' : 'es';
    this.language.set(language);
    this.updateDocumentLanguage(language);
    this.persistPreference('portfolio-language', language);
  }

  toggleTheme(): void {
    const theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(theme);
    document.documentElement.dataset['theme'] = theme;
    this.persistPreference('portfolio-theme', theme);
  }

  translate(value: string): string {
    return this.language() === 'en'
      ? SPANISH_TO_ENGLISH[value] ?? value
      : ENGLISH_TO_SPANISH[value] ?? value;
  }

  private readPreference<T extends string>(key: string, fallback: T): T {
    try {
      const value = localStorage.getItem(key);
      return value === 'es' || value === 'en' || value === 'dark' || value === 'light'
        ? value as T
        : fallback;
    } catch (error) {
      console.warn(`No se pudo leer la preferencia "${key}".`, error);
      return fallback;
    }
  }

  private persistPreference(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.warn(`No se pudo guardar la preferencia "${key}".`, error);
    }
  }

  private updateDocumentLanguage(language: Language): void {
    document.documentElement.lang = language;
    document.title = PAGE_TITLES[language];
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', PAGE_DESCRIPTIONS[language]);
  }
}
