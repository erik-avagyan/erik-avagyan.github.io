import { ChangeDetectionStrategy, Component, EventEmitter, Output, computed, inject, signal } from '@angular/core';
import { PROJECTS } from '../../data/portfolio.data';
import { Project } from '../../models/portfolio.models';
import { PortfolioPreferencesService } from '../../services/portfolio-preferences.service';

type ProjectCategory = 'Todos' | Project['category'];

@Component({
  selector: 'app-projects-section',
  standalone: true,
  templateUrl: './projects-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsSectionComponent {
  readonly i18n = inject(PortfolioPreferencesService);
  @Output() readonly projectSelected = new EventEmitter<Project>();

  readonly projects = PROJECTS;
  readonly categories: ProjectCategory[] = ['Todos', 'Web', 'Mobile'];
  readonly selectedCategory = signal<ProjectCategory>('Todos');
  readonly filteredProjects = computed(() => {
    const category = this.selectedCategory();
    return category === 'Todos'
      ? this.projects
      : this.projects.filter(project => project.category === category);
  });
}
