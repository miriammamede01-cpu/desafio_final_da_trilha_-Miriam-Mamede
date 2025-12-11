import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="landing-hero container">
      <div class="hero-content">
        <div class="icon-glow">⚡</div>
        <h1>V2G <span class="text-green">Energy</span></h1>
        <p class="subtitle">Use seu carro elétrico para <strong>economizar</strong> e <strong>estabilizar</strong> a rede elétrica.</p>

        <div class="features-grid">
          <div class="feature-card"><h3>15%</h3><p>Economia média</p></div>
          <div class="feature-card"><h3>24/7</h3><p>Monitoramento</p></div>
          <div class="feature-card"><h3>R$</h3><p>Créditos reais</p></div>
        </div>

        <button routerLink="/dashboard" class="btn-neon btn-large">Entrar na Plataforma →</button>
      </div>
    </div>
  `,
  styles: [`
    .landing-hero { min-height: 80vh; display: flex; align-items: center; justify-content: center; text-align: center; }
    .icon-glow { font-size: 4rem; background: var(--primary-green); width: 80px; height: 80px; line-height: 80px; border-radius: 50%; margin: 0 auto 20px; box-shadow: 0 0 20px var(--primary-green); }
    h1 { font-size: 3rem; margin-bottom: 10px; }
    .text-green { color: var(--primary-green); }
    .subtitle { color: var(--text-gray); font-size: 1.2rem; max-width: 600px; margin: 0 auto 40px; }
    .features-grid { display: flex; gap: 20px; justify-content: center; margin-bottom: 40px; }
    .feature-card { background: var(--card-dark); padding: 20px; border-radius: 12px; min-width: 120px; }
    .feature-card h3 { color: var(--text-light); margin: 0; font-size: 1.5rem; }
    .feature-card p { color: var(--text-gray); margin: 5px 0 0; font-size: 0.9rem; }
    .btn-large { font-size: 1.2rem; padding: 15px 40px; width: auto; }
    @media (max-width: 768px) {
      .features-grid { flex-direction: column; }
      .btn-large { width: 100%; }
    }
  `]
})
export class LandingComponent {}
