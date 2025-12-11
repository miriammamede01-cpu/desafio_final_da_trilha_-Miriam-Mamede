import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importante para os inputs funcionarem

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container fade-in">
      <h2>Dashboard <small style="color: var(--text-gray); font-size: 0.9rem;">Bem-vindo de volta</small></h2>

      <div class="card header-card">
        <div>🚗 <strong>Tesla Model 3</strong></div>
        <div class="status-badges">
          <span class="badge green">⚡ Conectado</span>
          <span class="badge gray">📡 Stand-by</span>
        </div>
      </div>

      <div class="dashboard-grid">
        <div class="card battery-section">
           <div class="battery-circle">
             <div class="inner-text">
               <h3>{{ bateriaAtual }}%</h3>
               <small>⚡ {{ autonomiaEstimada() }} km</small>
             </div>
             <svg viewBox="0 0 36 36" class="circular-chart">
               <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
               <path class="circle" [attr.stroke-dasharray]="bateriaAtual + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
             </svg>
           </div>
        </div>

        <div class="metrics-column">
          <div class="card metric-card green-accent">
            <small>CRÉDITOS ACUMULADOS</small>
            <h3>{{ creditosAcumulados | currency:'BRL' }}</h3>
            <small>Este mês</small>
          </div>
          <div class="card metric-card blue-accent">
            <small>ECONOMIA</small>
            <h3>15%</h3>
            <small>vs. mês anterior</small>
          </div>
        </div>
      </div>

      <div class="card simulator-card" style="margin-top: 20px;">
        <h3>📐 Simulação de Venda (V2G)</h3>
        <p style="color: var(--text-gray); font-size: 0.9rem;">Simule quanto você ganharia vendendo parte da sua bateria agora.</p>

        <div class="inputs-grid">
          <div>
             <label>Sua Bateria Atual (%):</label>
             <input type="number" [(ngModel)]="bateriaAtual" min="0" max="100">
          </div>
          <div>
             <label>Vender quanto? (%):</label>
             <input type="range" [(ngModel)]="porcentagemVenda" min="0" [max]="bateriaAtual">
             <div style="text-align: right; font-weight: bold; color: var(--primary-green)">{{ porcentagemVenda }}%</div>
          </div>
        </div>

        <div class="results-box">
           <p>Energia a enviar: <strong>{{ calcularKwhEnviado().toFixed(1) }} kWh</strong></p>
           <p class="highlight">Ganho Estimado: <strong>{{ calcularGanhoEstimado() | currency:'BRL' }}</strong></p>
        </div>

        <button class="btn-neon" (click)="simularEnvio()">⚡ Enviar energia agora (Simular)</button>
      </div>

    </div>
  `,
  styles: [`
    /* Animação de entrada */
    .fade-in { animation: fadeIn 0.5s ease-in; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

    .header-card { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .badge { padding: 5px 10px; border-radius: 20px; font-size: 0.8rem; margin-left: 10px; }
    .badge.green { background: rgba(16, 185, 129, 0.2); color: var(--primary-green); border: 1px solid var(--primary-green); }
    .badge.gray { background: rgba(156, 163, 175, 0.2); color: var(--text-gray); border: 1px solid var(--text-gray); }

    .dashboard-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

    /* Círculo da Bateria */
    .battery-section { display: flex; justify-content: center; align-items: center; }
    .battery-circle { position: relative; width: 150px; height: 150px; }
    .circular-chart { display: block; margin: 10px auto; max-width: 80%; max-height: 250px; }
    .circle-bg { fill: none; stroke: #374151; stroke-width: 3.8; }
    .circle { fill: none; stroke-width: 2.8; stroke-linecap: round; animation: progress 1s ease-out forwards; }
    @keyframes progress { 0% { stroke-dasharray: 0 100; } }
    .inner-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; }
    .inner-text h3 { margin: 0; font-size: 2rem; }
    .inner-text small { color: var(--text-gray); }

    /* Cards de Métricas */
    .metrics-column { display: flex; flex-direction: column; gap: 20px; }
    .metric-card h3 { font-size: 2rem; margin: 10px 0; }
    .metric-card small { color: var(--text-gray); text-transform: uppercase; font-size: 0.7rem; letter-spacing: 1px;}
    .green-accent { border-left: 4px solid var(--primary-green); }
    .blue-accent { border-left: 4px solid var(--accent-blue); }
    .battery-circle .circle { stroke: var(--primary-green); } /* Cor do círculo */

    /* Simulador */
    .inputs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
    .results-box { background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; margin-bottom: 20px; }
    .results-box p { display: flex; justify-content: space-between; margin: 5px 0; }
    .highlight { color: var(--primary-green); font-size: 1.2rem; font-weight: bold; }

    @media (max-width: 768px) {
      .dashboard-grid, .inputs-grid { grid-template-columns: 1fr; }
      .header-card { flex-direction: column; gap: 10px; align-items: flex-start; }
    }
  `]
})
export class DashboardComponent {
  bateriaAtual: number = 65;
  creditosAcumulados: number = 65.55;

  porcentagemVenda: number = 20;
  capacidadeTotalKwh: number = 60; 
  precoPorKwh: number = 0.92; 

  autonomiaEstimada(): number {
    const autonomiaTotal = 430;
    return Math.round((this.bateriaAtual / 100) * autonomiaTotal);
  }
  calcularKwhEnviado(): number {
    return (this.capacidadeTotalKwh * this.porcentagemVenda) / 100;
  }

  calcularGanhoEstimado(): number {
    return this.calcularKwhEnviado() * this.precoPorKwh;
  }

  simularEnvio() {
    const ganho = this.calcularGanhoEstimado();
    const kwh = this.calcularKwhEnviado();

    this.creditosAcumulados += ganho;
    this.bateriaAtual -= this.porcentagemVenda;
    this.porcentagemVenda = 0;

    alert(`✅ Sucesso! Você enviou ${kwh.toFixed(1)} kWh para a rede e gerou R$ ${ganho.toFixed(2)} em créditos.`);
  }
}
