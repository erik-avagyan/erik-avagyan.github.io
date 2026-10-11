import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EDUCATIONS } from '../../data/portfolio.data';
import { PortfolioPreferencesService } from '../../services/portfolio-preferences.service';

@Component({
  selector: 'app-education-section',
  standalone: true,
  templateUrl: './education-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationSectionComponent {
  readonly i18n = inject(PortfolioPreferencesService);
  readonly educations = EDUCATIONS;
}
