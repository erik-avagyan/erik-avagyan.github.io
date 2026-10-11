import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CONTACT } from '../../data/portfolio.data';
import { PortfolioPreferencesService } from '../../services/portfolio-preferences.service';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  templateUrl: './contact-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactSectionComponent {
  readonly i18n = inject(PortfolioPreferencesService);
  readonly contact = CONTACT;
  readonly currentYear = new Date().getFullYear();
  readonly copyStatus = signal<'idle' | 'copied' | 'error'>('idle');

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.contact.email);
      this.copyStatus.set('copied');
      window.setTimeout(() => this.copyStatus.set('idle'), 2000);
    } catch (error) {
      console.error('No se pudo copiar el correo al portapapeles.', error);
      this.copyStatus.set('error');
    }
  }
}
