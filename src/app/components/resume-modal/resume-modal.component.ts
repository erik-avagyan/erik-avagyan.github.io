import { ChangeDetectionStrategy, Component, EventEmitter, Output, inject } from '@angular/core';
import { PortfolioPreferencesService } from '../../services/portfolio-preferences.service';

@Component({
  selector: 'app-resume-modal',
  standalone: true,
  templateUrl: './resume-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumeModalComponent {
  readonly i18n = inject(PortfolioPreferencesService);
  @Output() readonly closed = new EventEmitter<void>();
}
