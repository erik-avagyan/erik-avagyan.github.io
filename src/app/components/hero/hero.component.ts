import { ChangeDetectionStrategy, Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { CONTACT } from '../../data/portfolio.data';
import { PortfolioPreferencesService } from '../../services/portfolio-preferences.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  readonly i18n = inject(PortfolioPreferencesService);
  readonly contact = CONTACT;
  readonly imageAvailable = signal(true);
  @Output() readonly contactRequested = new EventEmitter<void>();
  @Output() readonly resumeRequested = new EventEmitter<void>();
}
