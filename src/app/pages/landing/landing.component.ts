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
        <p class="subtitle">Use seu <strong>Ford Mustang Mach-E</strong> para economizar e estabilizar a rede elétrica.</p>

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
    /* Base Desktop */
    .landing-hero { 
      min-height: 90vh; /* Aumentei um pouco */
      display: flex; 
      align-items: center; 
      justify-content: center; 
      text-align: center;
      padding: 20px; /* Garante que nunca encoste na borda */
      box-sizing: border-box;
    }
    
    .icon-glow { 
      font-size: 4rem; 
      background: var(--primary-green); 
      width: 80px; height: 80px; 
      line-height: 80px; 
      border-radius: 50%; 
      margin: 0 auto 20px; 
      box-shadow: 0 0 20px var(--primary-green); 
      color: #0f172a; 
      cursor: default;
    }

    h1 { font-size: 3rem; margin-bottom: 10px; line-height: 1.1; }
    .text-green { color: var(--primary-green); }
    .subtitle { color: var(--text-gray); font-size: 1.2rem; max-width: 600px; margin: 0 auto 40px; }
    
    .features-grid { display: flex; gap: 20px; justify-content: center; margin-bottom: 40px; flex-wrap: wrap; }
    .feature-card { background: var(--card-dark); padding: 20px; border-radius: 12px; min-width: 120px; border: 1px solid #374151; }
    .feature-card h3 { color: var(--text-light); margin: 0; font-size: 1.5rem; }
    .feature-card p { color: var(--text-gray); margin: 5px 0 0; font-size: 0.9rem; }
    
    .btn-large { font-size: 1.2rem; padding: 15px 40px; width: auto; }

    /* --- CORREÇÃO MOBILE (Evita cortes) --- */
    @media (max-width: 768px) {
      .landing-hero {
        align-items: flex-start; /* Impede que corte o topo */
        padding-top: 60px; /* Espaço extra em cima */
        padding-bottom: 40px; /* Espaço extra embaixo */
        height: auto; /* Permite rolar se precisar */
      }

      .features-grid { 
        flex-direction: column; 
        width: 100%; 
        gap: 15px;
      }

      .feature-card { width: 100%; box-sizing: border-box; } /* Garante que o card não estoure a largura */
      
      .btn-large { width: 100%; box-sizing: border-box; }
      
      /* Logo menor para não ocupar toda a tela */
      .icon-glow { 
        width: 60px; height: 60px; 
        line-height: 60px; 
        font-size: 2.5rem; 
        margin-bottom: 15px;
      }
      
      h1 { font-size: 2.2rem; }
      .subtitle { font-size: 1rem; margin-bottom: 30px; padding: 0 10px; }
    }
  `]
})
export class LandingComponent {}
