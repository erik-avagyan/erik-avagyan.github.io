import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject, signal } from '@angular/core';
import { Project } from '../../models/portfolio.models';
import { PortfolioPreferencesService } from '../../services/portfolio-preferences.service';

@Component({
  selector: 'app-project-details-modal',
  standalone: true,
  templateUrl: './project-details-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDetailsModalComponent implements OnChanges {
  readonly i18n = inject(PortfolioPreferencesService);
  @Input({ required: true }) project!: Project;
  @Output() readonly closed = new EventEmitter<void>();
  readonly activeImageIndex = signal(0);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['project']) {
      this.activeImageIndex.set(0);
    }
  }

  showPreviousImage(): void {
    this.activeImageIndex.update(index => (index - 1 + this.project.images.length) % this.project.images.length);
  }

  showNextImage(): void {
    this.activeImageIndex.update(index => (index + 1) % this.project.images.length);
  }

  get currentImageAlt(): string {
    return `${this.project.title} — ${this.i18n.translate('projectModal.screenshot')} ${this.activeImageIndex() + 1}`;
  }
}
