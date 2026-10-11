import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { SKILL_CATEGORIES } from '../../data/portfolio.data';
import { PortfolioPreferencesService } from '../../services/portfolio-preferences.service';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  templateUrl: './skills-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsSectionComponent {
  readonly i18n = inject(PortfolioPreferencesService);
  readonly skillCategories = SKILL_CATEGORIES;
  readonly searchQuery = signal('');

  readonly filteredSkillCategories = computed(() => {
    const query = this.searchQuery().trim().toLocaleLowerCase();
    if (!query) {
      return this.skillCategories;
    }

    return this.skillCategories
      .map(category => ({
        ...category,
        skills: category.skills.filter(skill =>
          skill.toLocaleLowerCase().includes(query) ||
          this.i18n.translate(skill).toLocaleLowerCase().includes(query)
        )
      }))
      .filter(category => category.skills.length > 0);
  });

  updateSearch(event: Event): void {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      this.searchQuery.set(target.value);
    }
  }
}
