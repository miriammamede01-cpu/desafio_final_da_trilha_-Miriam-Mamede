import { Component, OnInit, OnDestroy } from '@angular/core'; // Adicionei Hooks
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importante para o *ngFor

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="landing-hero container">
      <div class="hero-content">
        <div class="icon-glow">⚡</div>

        <h1>V2G <span class="text-green">Energy</span></h1>
        <p class="subtitle">Use seu <strong>Ford Mustang Mach-E</strong> para economizar e estabilizar a rede elétrica.</p>

        <div class="carousel-container">
          <div class="carousel-slide fade-in-slide" *ngFor="let slide of slides; let i = index" [class.active]="i === currentSlide">
             <div class="feature-card" *ngIf="i === currentSlide">
                <h3>{{ slide.title }}</h3>
                <p>{{ slide.desc }}</p>
             </div>
          </div>
          <div class="dots">
            <span *ngFor="let s of slides; let i = index" [class.active]="i === currentSlide" (click)="setSlide(i)"></span>
          </div>
        </div>
        <button routerLink="/login" class="btn-neon btn-large">Entrar na Plataforma →</button>
      </div>
    </div>
  `,
  styles: [`
    /* Mesmos estilos de antes, adicionei esses pro Carrossel: */
    .landing-hero { min-height: 90vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 20px; }
    .icon-glow { font-size: 4rem; background: var(--primary-green); width: 80px; height: 80px; line-height: 80px; border-radius: 50%; margin: 0 auto 20px; box-shadow: 0 0 20px var(--primary-green); color: #0f172a; }
    h1 { font-size: 3rem; margin-bottom: 10px; }
    .text-green { color: var(--primary-green); }
    .subtitle { color: var(--text-gray); font-size: 1.2rem; margin-bottom: 40px; }
    .btn-large { font-size: 1.2rem; padding: 15px 40px; width: auto; }

    /* Estilos do Carrossel */
    .carousel-container {
      margin: 0 auto 40px;
      height: 140px; /* Altura fixa pra não pular */
      width: 100%;
      max-width: 400px;
      position: relative;
    }
    .feature-card {
      background: var(--card-dark); padding: 20px; border-radius: 12px; border: 1px solid #374151;
      animation: slideUp 0.5s ease;
    }
    .feature-card h3 { color: var(--text-light); margin: 0; font-size: 1.8rem; color: var(--primary-green); }
    .feature-card p { color: var(--text-gray); margin: 5px 0 0; }

    .dots { display: flex; justify-content: center; gap: 10px; margin-top: 15px; }
    .dots span { width: 10px; height: 10px; background: #374151; border-radius: 50%; cursor: pointer; transition: 0.3s; }
    .dots span.active { background: var(--primary-green); transform: scale(1.2); }

    @keyframes slideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  `]
})
export class LandingComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  intervalId: any;

  slides = [
    { title: '15%', desc: 'Economia média na conta de luz' },
    { title: '24/7', desc: 'Monitoramento em tempo real' },
    { title: 'R$', desc: 'Ganhe créditos vendendo energia' },
    { title: 'Eco', desc: 'Ajude o planeta com energia limpa' }
  ];

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 3000); // Muda a cada 3 segundos
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  setSlide(index: number) {
    this.currentSlide = index;
    // Reseta o timer pra não pular logo em seguida
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 3000);
  }
}
