import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EXPERIENCES } from '../../data/portfolio.data';
import { PortfolioPreferencesService } from '../../services/portfolio-preferences.service';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  templateUrl: './experience-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceSectionComponent {
  readonly i18n = inject(PortfolioPreferencesService);
  readonly experiences = EXPERIENCES;
}
