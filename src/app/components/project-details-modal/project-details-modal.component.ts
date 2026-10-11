import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Project } from '../../models/portfolio.models';
import { PortfolioPreferencesService } from '../../services/portfolio-preferences.service';

@Component({
  selector: 'app-project-details-modal',
  standalone: true,
  templateUrl: './project-details-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDetailsModalComponent {
  readonly i18n = inject(PortfolioPreferencesService);
  @Input({ required: true }) project!: Project;
  @Output() readonly closed = new EventEmitter<void>();
}
