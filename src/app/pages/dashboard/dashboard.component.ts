import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container fade-in">
      <h2>Dashboard <small style="color: var(--text-gray); font-size: 0.9rem;">Bem-vinda, Miriam</small></h2>

      <div class="card header-card">
        <div style="display: flex; align-items: center; gap: 15px;">
          <span style="font-size: 2rem;">🚙</span>
          <div>
            <div style="font-size: 1.2rem; font-weight: bold;">Ford Mustang Mach-E</div>
            <small style="color: var(--text-gray);">Placa: BRA-2E25</small>
          </div>
        </div>
        <div class="status-badges">
          <span class="badge green">⚡ Conectado à Rede</span>
          <span class="badge blue">🔄 V2G Ativo</span>
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
           <p style="text-align: center; margin-top: 10px; color: var(--text-gray);">Status da Bateria</p>
        </div>

        <div class="metrics-column">
          <div class="card metric-card green-accent">
            <small>CRÉDITOS TOTAIS GANHOS</small>
            <h3>{{ creditosAcumulados | currency:'BRL':'symbol':'1.2-2' }}</h3>
            <small>Acumulado no mês</small>
          </div>
          <div class="card metric-card blue-accent">
            <small>ENERGIA VENDIDA (TOTAL)</small>
            <h3>{{ energiaVendidaTotal.toFixed(1) }} kWh</h3>
            <small>Devolvida para a rede</small>
          </div>
        </div>
      </div>

      <div class="card simulator-card" style="margin-top: 20px;">
        <h3>📐 Simular Venda de Energia</h3>
        <p style="color: var(--text-gray); font-size: 0.9rem;">Defina quanto da sua bateria você quer vender para a rede agora.</p>

        <div class="inputs-grid">
          <div class="input-group">
             <label>Carga Atual (%):</label>
             <input class="modern-input" type="number" [(ngModel)]="bateriaAtual" disabled>
          </div>
          <div class="input-group">
             <label>Vender (%): <strong style="color: var(--primary-green)">{{ porcentagemVenda }}%</strong></label>
             <input type="range" [(ngModel)]="porcentagemVenda" min="0" [max]="bateriaAtual" style="width: 100%; margin-top: 10px;">
          </div>
        </div>

        <div class="results-box">
           <p>Energia a enviar: <strong>{{ calcularKwhEnviado().toFixed(1) }} kWh</strong></p>
           <p class="highlight">Crédito a Receber: <strong>{{ calcularGanhoEstimado() | currency:'BRL':'symbol':'1.2-2' }}</strong></p>
        </div>

        <button class="btn-neon" (click)="simularEnvio()">⚡ Vender Energia e Gerar Créditos</button>
      </div>

      <div class="card" style="margin-top: 20px;">
        <h3>📜 Histórico de Transações</h3>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Data/Hora</th>
                <th>Energia (kWh)</th>
                <th>Crédito Gerado</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let item of historico">
                <td>{{ item.data | date:'dd/MM HH:mm' }}</td>
                <td>{{ item.kwh.toFixed(1) }} kWh</td>
                <td style="color: var(--primary-green); font-weight: bold;">+ {{ item.credito | currency:'BRL':'symbol':'1.2-2' }}</td>
                <td><span class="badge green">Concluído</span></td>
              </tr>
            </tbody>
          </table>
          <p *ngIf="historico.length === 0" style="text-align: center; color: #666; padding: 20px;">Nenhuma venda realizada ainda.</p>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .fade-in { animation: fadeIn 0.5s ease-in; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

    .header-card { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .badge { padding: 5px 12px; border-radius: 20px; font-size: 0.8rem; margin-left: 10px; font-weight: bold; }
    .badge.green { background: rgba(16, 185, 129, 0.2); color: var(--primary-green); border: 1px solid var(--primary-green); }
    .badge.blue { background: rgba(59, 130, 246, 0.2); color: #3b82f6; border: 1px solid #3b82f6; }

    .dashboard-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

    .battery-section { display: flex; flex-direction: column; justify-content: center; align-items: center; }
    .battery-circle { position: relative; width: 150px; height: 150px; }
    .circular-chart { display: block; margin: 10px auto; max-width: 80%; max-height: 250px; }
    .circle-bg { fill: none; stroke: #374151; stroke-width: 3.8; }
    .circle { fill: none; stroke-width: 2.8; stroke-linecap: round; animation: progress 1s ease-out forwards; }
    @keyframes progress { 0% { stroke-dasharray: 0 100; } }
    .inner-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; }
    .inner-text h3 { margin: 0; font-size: 2rem; }
    .battery-circle .circle { stroke: var(--primary-green); }

    .metrics-column { display: flex; flex-direction: column; gap: 20px; }
    .metric-card h3 { font-size: 1.8rem; margin: 10px 0; }
    .green-accent { border-left: 4px solid var(--primary-green); }
    .blue-accent { border-left: 4px solid #3b82f6; }

    /* Inputs */
    .inputs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
    .modern-input { width: 100%; padding: 12px; border-radius: 8px; border: 1px solid #374151; background: rgba(0,0,0,0.1); color: var(--text-light); }
    
    .results-box { background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid var(--primary-green); }
    .results-box p { display: flex; justify-content: space-between; margin: 8px 0; font-size: 1.1rem; }

    /* Tabela */
    .table-container { overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    th { text-align: left; padding: 12px; border-bottom: 2px solid #374151; color: var(--text-gray); font-size: 0.9rem; }
    td { padding: 12px; border-bottom: 1px solid #374151; }
    
    @media (max-width: 768px) {
      .dashboard-grid, .inputs-grid { grid-template-columns: 1fr; }
      .header-card { flex-direction: column; gap: 15px; align-items: flex-start; }
    }
  `]
})
export class DashboardComponent {
  bateriaAtual: number = 72;
  creditosAcumulados: number = 145.50;
  energiaVendidaTotal: number = 120.5;

  porcentagemVenda: number = 10;
  capacidadeTotalKwh: number = 88;
  precoPorKwh: number = 0.92; 

  historico: any[] = [
    { data: new Date('2025-12-10T14:30:00'), kwh: 12.5, credito: 11.50, status: 'Concluído' },
    { data: new Date('2025-12-09T09:15:00'), kwh: 8.0, credito: 7.36, status: 'Concluído' }
  ];

  autonomiaEstimada(): number {
    const autonomiaTotal = 490;
    return Math.round((this.bateriaAtual / 100) * autonomiaTotal);
  }
  
  calcularKwhEnviado(): number {
    return (this.capacidadeTotalKwh * this.porcentagemVenda) / 100;
  }

  calcularGanhoEstimado(): number {
    return this.calcularKwhEnviado() * this.precoPorKwh;
  }

  simularEnvio() {
    if (this.porcentagemVenda <= 0) return;

    const ganho = this.calcularGanhoEstimado();
    const kwh = this.calcularKwhEnviado();

    this.creditosAcumulados += ganho;
    this.energiaVendidaTotal += kwh;
    this.bateriaAtual -= this.porcentagemVenda;

    this.historico.unshift({
      data: new Date(),
      kwh: kwh,
      credito: ganho,
      status: 'Concluído'
    });

    this.porcentagemVenda = 0; 
    alert(`✅ Venda Confirmada!\n\nVocê enviou ${kwh.toFixed(1)} kWh para a rede.\nCrédito gerado: R$ ${ganho.toFixed(2)}`);
  }
}
