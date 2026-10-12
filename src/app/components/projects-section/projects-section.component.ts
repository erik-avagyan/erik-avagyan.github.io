import { ChangeDetectionStrategy, Component, EventEmitter, Output, computed, inject, signal } from '@angular/core';
import { PROJECTS } from '../../data/portfolio.data';
import { Project } from '../../models/portfolio.models';
import { PortfolioPreferencesService } from '../../services/portfolio-preferences.service';

type ProjectCategory = 'All' | Project['category'];

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
  readonly filterCategories = computed<ProjectCategory[]>(() => {
    const categoryCounts = new Map<Project['category'], number>();
    for (const project of this.projects) {
      categoryCounts.set(project.category, (categoryCounts.get(project.category) ?? 0) + 1);
    }

    const categories = [...categoryCounts]
      .filter(([, count]) => count > 1)
      .map(([category]) => category);

    return categories.length > 0 ? ['All', ...categories] : [];
  });
  readonly selectedCategory = signal<ProjectCategory>('All');
  readonly showFilters = computed(() => this.filterCategories().length > 0);
  readonly filteredProjects = computed(() => {
    const category = this.selectedCategory();
    return category === 'All'
      ? this.projects
      : this.projects.filter(project => project.category === category);
  });
}
