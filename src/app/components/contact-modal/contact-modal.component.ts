import { ChangeDetectionStrategy, Component, EventEmitter, Output, inject } from '@angular/core';
import { CONTACT } from '../../data/portfolio.data';
import { PortfolioPreferencesService } from '../../services/portfolio-preferences.service';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  templateUrl: './contact-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactModalComponent {
  readonly i18n = inject(PortfolioPreferencesService);
  readonly contact = CONTACT;
  @Output() readonly closed = new EventEmitter<void>();
}
