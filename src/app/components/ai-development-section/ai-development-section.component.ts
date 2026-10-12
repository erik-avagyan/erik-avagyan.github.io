import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioPreferencesService, TranslationId } from '../../services/portfolio-preferences.service';

interface AiPillar {
  title: TranslationId;
  description: TranslationId;
}

@Component({
  selector: 'app-ai-development-section',
  standalone: true,
  templateUrl: './ai-development-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AiDevelopmentSectionComponent {
  readonly i18n = inject(PortfolioPreferencesService);
  readonly pillars: AiPillar[] = [
    {
      title: 'ai.pillar.productivity.title',
      description: 'ai.pillar.productivity.description'
    },
    {
      title: 'ai.pillar.workflow.title',
      description: 'ai.pillar.workflow.description'
    },
    {
      title: 'ai.pillar.quality.title',
      description: 'ai.pillar.quality.description'
    }
  ];
}
