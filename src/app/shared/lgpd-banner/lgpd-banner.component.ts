import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lgpd-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="lgpd-container" *ngIf="mostrarBanner">
      <p>
        Nós utilizamos cookies para melhorar sua experiência e analisar o tráfego,
        em conformidade com a <strong>LGPD</strong>. Ao continuar, você concorda com nossa política.
      </p>
      <button class="btn-neon btn-small" (click)="aceitarCookies()">Aceitar e Fechar</button>
    </div>
  `,
  styles: [`
    .lgpd-container {
      position: fixed; bottom: 0; left: 0; right: 0;
      background-color: var(--card-dark); border-top: 2px solid var(--primary-green);
      padding: 20px; display: flex; justify-content: space-between; align-items: center;
      z-index: 999; box-shadow: 0 -4px 10px rgba(0,0,0,0.3);
    }
    p { margin: 0; font-size: 0.9rem; color: var(--text-gray); max-width: 80%; }
    .btn-small { width: auto; padding: 10px 20px; }
    @media (max-width: 768px) {
      .lgpd-container { flex-direction: column; gap: 15px; text-align: center; }
      p { max-width: 100%; }
    }
  `]
})
export class LgpdBannerComponent {
  mostrarBanner = false;

  ngOnInit() {
    if (!localStorage.getItem('lgpd-consent')) {
      this.mostrarBanner = true;
    }
  }

  aceitarCookies() {
    localStorage.setItem('lgpd-consent', 'true');
    this.mostrarBanner = false;
  }
}
