import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PortfolioPreferencesService } from './services/portfolio-preferences.service';
import { Project } from './models/portfolio.models';
import { ContactModalComponent } from './components/contact-modal/contact-modal.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { EducationSectionComponent } from './components/education-section/education-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { HeroComponent } from './components/hero/hero.component';
import { LanguagesSectionComponent } from './components/languages-section/languages-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResumeModalComponent } from './components/resume-modal/resume-modal.component';
import { ProjectDetailsModalComponent } from './components/project-details-modal/project-details-modal.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    LanguagesSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    ContactSectionComponent,
    ProjectDetailsModalComponent,
    ContactModalComponent,
    ResumeModalComponent
  ],
  template: `
    <div
      class="portfolio-shell min-h-screen pb-24 font-sans text-[#f5f5f7] antialiased selection:bg-[#2997ff] selection:text-white"
      [class.light-theme]="preferences.theme() === 'light'">
      <div class="pointer-glow" aria-hidden="true"></div>
      <app-navbar
        (contactRequested)="contactModalOpen.set(true)"
        (resumeRequested)="resumeModalOpen.set(true)" />
      <main class="relative z-10">
        <app-hero
          (contactRequested)="contactModalOpen.set(true)"
          (resumeRequested)="resumeModalOpen.set(true)" />
        <app-experience-section />
        <app-education-section />
        <app-languages-section />
        <app-projects-section (projectSelected)="activeProject.set($event)" />
        <app-skills-section />
        <app-contact-section />
      </main>

      @if (activeProject(); as project) {
        <app-project-details-modal [project]="project" (closed)="activeProject.set(null)" />
      }
      @if (contactModalOpen()) {
        <app-contact-modal (closed)="contactModalOpen.set(false)" />
      }
      @if (resumeModalOpen()) {
        <app-resume-modal (closed)="resumeModalOpen.set(false)" />
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private readonly document = inject(DOCUMENT);
  readonly preferences = inject(PortfolioPreferencesService);
  readonly activeProject = signal<Project | null>(null);
  readonly contactModalOpen = signal(false);
  readonly resumeModalOpen = signal(false);

  @HostListener('document:pointermove', ['$event'])
  trackPointer(event: PointerEvent): void {
    if (event.pointerType === 'touch') {
      return;
    }

    const root = this.document.documentElement;
    root.style.setProperty('--pointer-x', `${event.clientX}px`);
    root.style.setProperty('--pointer-y', `${event.clientY}px`);
  }
}
