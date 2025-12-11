import { Component, OnInit } from '@angular/core'; // Adicionei OnInit
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lgpd-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="lgpd-overlay fade-in" *ngIf="mostrarBanner">
      
      <div class="lgpd-modal">
        <div class="icon-lock">🔐</div>
        <h2>Acesso Seguro EcoVolt</h2>
        <p>
          Para acessar o Dashboard de V2G e calcular seus ganhos, precisamos que você concorde com o uso de dados anônimos de bateria, conforme a <strong>Lei Geral de Proteção de Dados (LGPD)</strong>.
        </p>
        
        <div class="actions">
          <button class="btn-neon btn-full" (click)="aceitarCookies()">
            ACEITAR E ACESSAR SISTEMA
          </button>
        </div>
        
        <small style="color: #666; display: block; margin-top: 15px; font-size: 0.7rem;">
          Seus dados estão protegidos e criptografados.
        </small>
      </div>

    </div>
  `,
  styles: [`
    /* Fundo Escuro que cobre tudo */
    .lgpd-overlay {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background-color: rgba(0, 0, 0, 0.9); /* Bem escuro */
      z-index: 9999; /* Fica na frente de tudo */
      display: flex; justify-content: center; align-items: center;
      backdrop-filter: blur(8px); /* Desfoque no fundo */
    }

    /* Caixa Branca Central */
    .lgpd-modal {
      background: white;
      padding: 40px;
      width: 90%;
      max-width: 450px;
      border-radius: 16px;
      text-align: center;
      box-shadow: 0 20px 60px rgba(0,255,100,0.2); /* Sombra verde */
      border: 1px solid rgba(0,0,0,0.1);
    }

    .icon-lock { font-size: 3rem; margin-bottom: 15px; }

    h2 { color: #1f2937; margin-bottom: 15px; font-size: 1.5rem; }
    p { color: #4b5563; line-height: 1.6; margin-bottom: 25px; font-size: 0.95rem; }

    /* Botão estilo "Neon" adaptado para fundo branco */
    .btn-full {
      width: 100%;
      background: #00C853;
      color: white;
      border: none;
      padding: 15px;
      font-size: 1rem;
      font-weight: bold;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.2s;
      box-shadow: 0 4px 15px rgba(0, 200, 83, 0.4);
    }
    .btn-full:hover { transform: scale(1.02); background: #00b548; }

    /* Animação */
    .fade-in { animation: fadeIn 0.5s ease-out; }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  `]
})
export class LgpdBannerComponent implements OnInit {
  mostrarBanner = true;

  ngOnInit() {
    const aceitou = localStorage.getItem('lgpd-consent');
    if (aceitou) {
      this.mostrarBanner = false;
    }
  }

  aceitarCookies() {
    localStorage.setItem('lgpd-consent', 'true');
    this.mostrarBanner = false;
  }
}
