import { ChangeDetectionStrategy, Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { PortfolioPreferencesService } from '../../services/portfolio-preferences.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  readonly i18n = inject(PortfolioPreferencesService);
  @Output() readonly contactRequested = new EventEmitter<void>();
  @Output() readonly resumeRequested = new EventEmitter<void>();
  readonly mobileMenuOpen = signal(false);

  toggleMenu(): void {
    this.mobileMenuOpen.update(isOpen => !isOpen);
  }

  closeMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
