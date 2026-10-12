import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';

export type Language = 'es' | 'en';

const TRANSLATIONS = {
  'meta.title': { es: 'Erik Avagyan | Ingeniero de Software', en: 'Erik Avagyan | Software Engineer' },
  'meta.description': { es: 'Portfolio de Erik Avagyan, ingeniero de software especializado en aplicaciones web, de escritorio y móviles.', en: 'Portfolio of Erik Avagyan, a software engineer specializing in web, desktop, and mobile applications.' },
  'nav.label': { es: 'Navegación principal', en: 'Main navigation' },
  'nav.experience': { es: 'Experiencia', en: 'Experience' },
  'nav.education': { es: 'Estudios', en: 'Education' },
  'nav.languages': { es: 'Idiomas', en: 'Languages' },
  'nav.projects': { es: 'Proyectos', en: 'Projects' },
  'nav.technologies': { es: 'Tecnologías', en: 'Technologies' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  'action.contact': { es: 'Contactar', en: 'Get in touch' },
  'action.resume': { es: 'CV', en: 'Resume' },
  'action.switchLanguageToEnglish': { es: 'Cambiar idioma a inglés', en: 'Switch language to English' },
  'action.switchLanguageToSpanish': { es: 'Cambiar idioma a español', en: 'Switch language to Spanish' },
  'action.enableLightMode': { es: 'Activar modo claro', en: 'Enable light mode' },
  'action.enableDarkMode': { es: 'Activar modo oscuro', en: 'Enable dark mode' },
  'action.lightMode': { es: 'Modo claro', en: 'Light mode' },
  'action.darkMode': { es: 'Modo oscuro', en: 'Dark mode' },
  'action.toggleMenu': { es: 'Abrir o cerrar menú', en: 'Open or close menu' },
  'action.close': { es: 'Cerrar', en: 'Close' },
  'hero.eyebrow': { es: 'Ingeniero de Software', en: 'Software Engineer' },
  'hero.title': { es: 'Diseñando y construyendo software para resolver problemas reales.', en: 'Designing and building software to solve real-world problems.' },
  'hero.description': { es: 'Ingeniero de software con formación en Ingeniería Informática y un Máster en Desarrollo de Aplicaciones Móviles por la Universidad de Alicante.', en: 'Software engineer with a Computer Engineering background and a Master’s Degree in Mobile Application Development from the University of Alicante.' },
  'hero.position': { es: 'Ingeniero de Software · Equipo de Apps en Embention', en: 'Software Engineer · Apps Team at Embention' },
  'hero.body.embention': { es: 'Trabajo en Embention, en el equipo de Apps & Cloud, desarrollando software web y de escritorio para sistemas aeronáuticos autónomos y críticos para la seguridad.', en: 'I work at Embention as part of the Apps & Cloud team, developing web and desktop software for autonomous, safety-critical aerospace systems.' },
  'hero.body.fullStack': { es: 'Mi experiencia abarca el desarrollo frontend y backend, desde interfaces intuitivas hasta servicios escalables.', en: 'My experience spans frontend and backend development, from intuitive interfaces to scalable services.' },
  'hero.body.adaptability': { es: 'Mi formación me permite adaptarme con rapidez a nuevas tecnologías, proyectos y equipos multidisciplinares.', en: 'My background helps me quickly adapt to new technologies, projects, and multidisciplinary teams.' },
  'hero.jobLocation': { es: 'Ingeniero de Software · Alicante, España', en: 'Software Engineer · Alicante, Spain' },
  'hero.imageAlt': { es: 'Imagen de Erik Avagyan', en: 'Portrait of Erik Avagyan' },
  'hero.contact': { es: 'Ponerse en contacto', en: 'Get in touch' },
  'hero.projects': { es: 'Ver proyectos', en: 'View projects' },
  'hero.location': { es: 'Alicante, España', en: 'Alicante, Spain' },
  'hero.openToWork': { es: 'Disponible para oportunidades', en: 'Open to opportunities' },
  'hero.profileAlt': { es: 'Retrato de Erik Avagyan', en: 'Portrait of Erik Avagyan' },
  'experience.eyebrow': { es: 'Trayectoria', en: 'Career' },
  'experience.title': { es: 'Experiencia Profesional', en: 'Professional Experience' },
  'experience.intro': { es: 'Enfoque en aplicaciones web, de escritorio y móviles para sistemas autónomos.', en: 'Building web, desktop, and mobile applications for autonomous systems.' },
  'experience.embention.role': { es: 'Ingeniero de Software, desarrollador de aplicaciones', en: 'Software Engineer, Apps Developer' },
  'experience.embention.period': { es: 'Junio 2026 - Actualidad', en: 'June 2026 - Present' },
  'experience.embention.location': { es: 'Alicante, España', en: 'Alicante, Spain' },
  'experience.embention.description': { es: 'Formo parte del equipo Apps & Cloud de Embention, desarrollando y manteniendo aplicaciones de escritorio y web para soluciones aeronáuticas.', en: 'Part of Embention’s Apps & Cloud team, developing and maintaining desktop and web applications for aerospace solutions.' },
  'experience.embention.highlight.1': { es: 'Desarrollo aplicaciones para el control, la configuración y la supervisión de autopilotos, aviónica y estaciones de control para drones autónomos y aeronaves eVTOL.', en: 'Develop applications to control, configure, and monitor safety-critical autopilots, avionics, and ground control solutions for autonomous drones and eVTOL aircraft.' },
  'experience.embention.highlight.2': { es: 'Trabajo en aplicaciones multiplataforma con Java, Angular, Go, TypeScript y Wails.', en: 'Build cross-platform desktop and web applications using Java, Angular, Go, TypeScript, and Wails.' },
  'experience.tutoring.role': { es: 'Tutor e instructor de programación', en: 'Programming Tutor & Instructor' },
  'experience.tutoring.company': { es: 'Clases particulares', en: 'Private lessons' },
  'experience.tutoring.period': { es: 'Clases particulares', en: 'Private lessons' },
  'experience.tutoring.location': { es: 'Online', en: 'Online' },
  'experience.tutoring.description': { es: 'Impartí clases particulares de programación a estudiantes universitarios y de formación profesional.', en: 'Delivered private programming lessons to university and vocational training students.' },
  'experience.tutoring.highlight.1': { es: 'Enseñé Python, Java, PHP y C++, adaptando el contenido al nivel y los objetivos de cada estudiante.', en: 'Taught Python, Java, PHP, and C++, adapting lessons to each student’s level and goals.' },
  'experience.duallink.role': { es: 'Prácticas de Ingeniería Informática', en: 'Computer Engineering Internship' },
  'experience.duallink.period': { es: 'Febrero - Julio 2023', en: 'February - July 2023' },
  'experience.duallink.location': { es: 'Sant Joan d’Alacant, España', en: 'Sant Joan d’Alacant, Spain' },
  'experience.duallink.description': { es: 'Realicé prácticas de desarrollo de software en Dual Link.', en: 'Completed a software development internship at Dual Link.' },
  'experience.duallink.highlight.1': { es: 'Desarrollé aplicaciones nativas para iOS con Swift.', en: 'Developed native iOS applications with Swift.' },
  'experience.duallink.highlight.2': { es: 'Diseñé e implementé una herramienta basada en IA para agilizar la traducción y localización de aplicaciones.', en: 'Designed and implemented an AI-powered tool to streamline application translation and localization.' },
  'education.eyebrow': { es: 'Formación Académica', en: 'Education' },
  'education.title': { es: 'Educación y Titulaciones', en: 'Education & Degrees' },
  'education.location': { es: 'Alicante, España', en: 'Alicante, Spain' },
  'education.bachelor.degree': { es: 'Grado en Ingeniería Informática', en: 'Bachelor’s Degree in Computer Engineering' },
  'education.bachelor.period': { es: '2020 - 2024', en: '2020 - 2024' },
  'education.bachelor.highlight.1': { es: 'Fundamentos de ingeniería de software, programación y diseño de sistemas.', en: 'Software engineering, programming, and systems design fundamentals.' },
  'education.bachelor.highlight.2': { es: 'Análisis, pruebas y gestión de proyectos para trabajar en distintos equipos y proyectos.', en: 'Analysis, testing, and project management skills for working across teams and projects.' },
  'education.bachelor.highlight.3': { es: 'Formación amplia que facilita la adaptación a nuevas tecnologías y entornos.', en: 'Broad academic foundation supporting adaptation to new technologies and environments.' },
  'education.master.degree': { es: 'Máster en Desarrollo de Aplicaciones Móviles', en: 'Master’s Degree in Mobile Application Development' },
  'education.master.period': { es: '2024 - 2025', en: '2024 - 2025' },
  'education.master.highlight.1': { es: 'Desarrollo nativo para Android con Kotlin y para iOS con Swift.', en: 'Native Android development with Kotlin and iOS development with Swift.' },
  'education.master.highlight.2': { es: 'Desarrollo multiplataforma y arquitecturas de aplicaciones móviles.', en: 'Cross-platform development and mobile application architectures.' },
  'education.master.highlight.3': { es: 'Desarrollo de juegos nativos para iOS y juegos para Android con Unity.', en: 'Native iOS game development and Android game development with Unity.' },
  'education.master.highlight.4': { es: 'Trabajo fin de máster: aplicación multiplataforma de gestión de finanzas personales.', en: 'Master’s thesis: a cross-platform personal finance management application.' },
  'projects.eyebrow': { es: 'Portfolio', en: 'Portfolio' },
  'projects.title': { es: 'Proyectos Destacados', en: 'Featured Projects' },
  'projects.filter.all': { es: 'Todos', en: 'All' },
  'projects.category.web': { es: 'Web', en: 'Web' },
  'projects.category.mobile': { es: 'Móvil', en: 'Mobile' },
  'projects.noResults': { es: 'No hay proyectos en esta categoría todavía.', en: 'No projects in this category yet.' },
  'projects.filterLabel': { es: 'Filtrar proyectos', en: 'Filter projects' },
  'projects.openRepository': { es: 'Abrir repositorio de GitHub', en: 'Open GitHub repository' },
  'projects.details': { es: 'Ver detalles técnicos', en: 'View technical details' },
  'projects.liber.subtitle': { es: 'Red social de cine', en: 'Movie social network' },
  'projects.liber.description': { es: 'Red social y base de datos cinematográfica con foros, mensajería privada, reseñas y listas personalizadas.', en: 'A social network and movie database with forums, private messaging, reviews, and customizable lists.' },
  'projects.liber.longDescription': { es: 'Plataforma full-stack para descubrir películas y compartir opiniones. Incluye foros de debate, mensajería privada en tiempo real, reseñas, listas personalizables y páginas detalladas de películas, directores y reparto. Diseñé y optimicé el esquema relacional para gestionar contenido de usuarios y metadatos.', en: 'A full-stack platform for discovering films and sharing opinions. It includes discussion forums, real-time private messaging, reviews, customizable lists, and detailed pages for films, directors, and cast. Designed and optimized the relational schema for user-generated content and media metadata.' },
  'projects.caishen.subtitle': { es: 'Aplicación de finanzas personales', en: 'Personal finance app' },
  'projects.caishen.description': { es: 'Aplicación multiplataforma para gestionar ingresos, gastos, deudas y costes compartidos.', en: 'A cross-platform application to manage income, expenses, debts, and shared costs.' },
  'projects.caishen.longDescription': { es: 'Aplicación multiplataforma de finanzas personales para controlar ingresos y gastos, supervisar deudas y dividir gastos compartidos. Integra servicios backend y lógica serverless para sincronización en tiempo real y autenticación.', en: 'A cross-platform personal finance application to track income and expenses, monitor debts, and split shared costs. Integrated backend services and serverless logic for real-time synchronization and authentication.' },
  'skills.eyebrow': { es: 'Stack Técnico', en: 'Technical stack' },
  'skills.title': { es: 'Tecnologías y Lenguajes', en: 'Technologies and Languages' },
  'skills.intro': { es: 'Tecnologías y herramientas con las que he trabajado.', en: 'Technologies and tools I have worked with.' },
  'skills.category.languages': { es: 'Lenguajes', en: 'Languages' },
  'skills.category.frameworks': { es: 'Frameworks', en: 'Frameworks' },
  'skills.category.tools': { es: 'Herramientas', en: 'Tools' },
  'skills.category.databases': { es: 'Bases de datos', en: 'Databases' },
  'skills.category.interests': { es: 'Áreas de interés', en: 'Areas of interest' },
  'skills.category.softSkills': { es: 'Habilidades interpersonales', en: 'Soft skills' },
  'skills.search': { es: 'Buscar tecnología...', en: 'Search technologies...' },
  'skills.searchLabel': { es: 'Buscar tecnología', en: 'Search technologies' },
  'skills.empty': { es: 'No se encontraron tecnologías que coincidan con la búsqueda.', en: 'No technologies match your search.' },
  'languages.eyebrow': { es: 'Comunicación', en: 'Communication' },
  'languages.title': { es: 'Idiomas que hablo', en: 'Languages I speak' },
  'languages.intro': { es: 'La comunicación entre culturas forma parte de quién soy. Estos son los idiomas que hablo y mi nivel en cada uno.', en: 'Communication across cultures is part of who I am. These are the languages I speak and my level in each.' },
  'languages.armenian.name': { es: 'Armenio', en: 'Armenian' },
  'languages.armenian.level': { es: 'Nativo', en: 'Native' },
  'languages.armenian.note': { es: 'Mi idioma nativo; lo uso en el ámbito personal y familiar.', en: 'My native language, used in personal and family life.' },
  'languages.spanish.name': { es: 'Español', en: 'Spanish' },
  'languages.spanish.level': { es: 'Casi nativo', en: 'Near-native' },
  'languages.spanish.note': { es: 'Uso profesional, académico y personal.', en: 'Used professionally, academically, and personally.' },
  'languages.english.name': { es: 'Inglés', en: 'English' },
  'languages.english.level': { es: 'Competencia profesional', en: 'Professional proficiency' },
  'languages.english.note': { es: 'Uso profesional, académico y personal.', en: 'Used professionally, academically, and personally.' },
  'languages.russian.name': { es: 'Ruso', en: 'Russian' },
  'languages.russian.level': { es: 'Casi nativo', en: 'Near-native' },
  'languages.russian.note': { es: 'Uso personal.', en: 'Used personally.' },
  'languages.valencian.name': { es: 'Valenciano / catalán', en: 'Valencian / Catalan' },
  'languages.valencian.level': { es: 'Básico', en: 'Basic' },
  'languages.valencian.note': { es: 'Uso personal y académico.', en: 'Used personally and academically.' },
  'languages.mandarin.name': { es: 'Chino mandarín', en: 'Mandarin Chinese' },
  'languages.mandarin.level': { es: 'Nivel muy básico', en: 'Very basic level' },
  'languages.mandarin.note': { es: 'Aprendiendo; solo conocimientos básicos y con ganas de seguir mejorando.', en: 'Currently learning; basic knowledge and eager to learn more.' },
  'languages.learning': { es: 'En aprendizaje', en: 'Currently learning' },
  'contact.eyebrow': { es: 'Contacto', en: 'Contact' },
  'contact.title': { es: '¿Hablamos sobre un proyecto?', en: 'Let’s talk about a project' },
  'contact.description': { es: 'Si quieres saber más sobre mi experiencia o mis proyectos, puedes escribirme o llamarme.', en: 'If you would like to know more about my experience or projects, feel free to email or call me.' },
  'contact.copied': { es: '¡Copiado!', en: 'Copied!' },
  'contact.copyError': { es: 'No se pudo copiar', en: 'Could not copy' },
  'contact.copyEmail': { es: 'Copiar Email', en: 'Copy email' },
  'contact.phone': { es: 'Teléfono', en: 'Phone' },
  'contact.footer': { es: 'Desarrollado con Angular 19 & Tailwind CSS.', en: 'Built with Angular 19 & Tailwind CSS.' },
  'contactModal.closeLabel': { es: 'Cerrar ventana de contacto', en: 'Close contact dialog' },
  'contactModal.title': { es: 'Contactar con Erik', en: 'Get in touch with Erik' },
  'contactModal.description': { es: 'Envíame un correo directo o conecta a través de mis redes profesionales.', en: 'Send me an email or connect through my professional profiles.' },
  'contactModal.email': { es: 'Enviar correo electrónico', en: 'Send email' },
  'contactModal.call': { es: 'Llamar', en: 'Call' },
  'contactModal.linkedin': { es: 'Perfil de LinkedIn', en: 'LinkedIn profile' },
  'contactModal.github': { es: 'Perfil de GitHub', en: 'GitHub profile' },
  'resume.title': { es: 'CV de Erik Avagyan', en: 'Erik Avagyan’s Resume' },
  'resume.open': { es: 'Abrir CV en una pestaña nueva', en: 'Open resume in a new tab' },
  'resume.download': { es: 'Descargar CV', en: 'Download resume' },
  'resume.loading': { es: 'Cargando CV…', en: 'Loading resume…' },
  'resume.previewError': { es: 'No se pudo mostrar la vista previa. Puedes abrir o descargar el PDF.', en: 'The preview could not be displayed. You can open or download the PDF.' },
  'resumeModal.title': { es: 'Currículum', en: 'Resume' },
  'resumeModal.download': { es: 'Descargar CV', en: 'Download resume' },
  'resumeModal.open': { es: 'Abrir PDF en una pestaña nueva', en: 'Open PDF in a new tab' },
  'resumeModal.close': { es: 'Cerrar currículum', en: 'Close resume' },
  'projectModal.close': { es: 'Cerrar detalles del proyecto', en: 'Close project details' },
  'projectModal.technologies': { es: 'Tecnologías utilizadas', en: 'Technologies used' },
  'projectModal.visit': { es: 'Visitar proyecto', en: 'Visit project' },
  'projectModal.closeLabel': { es: 'Cerrar detalles', en: 'Close details' },
  'projectModal.technologyHeading': { es: 'Tecnologías empleadas:', en: 'Technologies used:' },
  'projectModal.viewCode': { es: 'Ver Código en GitHub', en: 'View code on GitHub' }
} as const;

export type TranslationId = keyof typeof TRANSLATIONS;

@Injectable({ providedIn: 'root' })
export class PortfolioPreferencesService {
  private readonly document = inject(DOCUMENT);
  private readonly languageKey = 'portfolio-language';
  private readonly themeKey = 'portfolio-theme';

  readonly language = signal<Language>(this.readLanguage());
  readonly theme = signal<'dark' | 'light'>(this.readTheme());
  readonly isDark = computed(() => this.theme() === 'dark');

  constructor() {
    effect(() => {
      const language = this.language();
      this.document.documentElement.lang = language;
      this.document.title = this.translate('meta.title');
      this.document.querySelector('meta[name="description"]')?.setAttribute('content', this.translate('meta.description'));
      localStorage.setItem(this.languageKey, language);
    });

    effect(() => {
      const theme = this.theme();
      this.document.documentElement.dataset['theme'] = theme;
      localStorage.setItem(this.themeKey, theme);
    });
  }

  translate(id: TranslationId): string {
    return TRANSLATIONS[id][this.language()];
  }

  toggleLanguage(): void {
    this.language.update(language => language === 'es' ? 'en' : 'es');
  }

  setLanguage(language: Language): void {
    this.language.set(language);
  }

  toggleTheme(): void {
    this.theme.update(theme => theme === 'dark' ? 'light' : 'dark');
  }

  private readLanguage(): Language {
    return localStorage.getItem(this.languageKey) === 'en' ? 'en' : 'es';
  }

  private readTheme(): 'dark' | 'light' {
    return localStorage.getItem(this.themeKey) === 'light' ? 'light' : 'dark';
  }
}
