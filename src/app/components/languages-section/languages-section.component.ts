import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SPOKEN_LANGUAGES } from '../../data/portfolio.data';
import { PortfolioPreferencesService } from '../../services/portfolio-preferences.service';

@Component({
  selector: 'app-languages-section',
  standalone: true,
  templateUrl: './languages-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguagesSectionComponent {
  readonly i18n = inject(PortfolioPreferencesService);
  readonly languages = SPOKEN_LANGUAGES;
}
