import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  template: `
    <div class="container fade-in">
      <h2>⚙️ Configurações</h2>

      <div class="card" style="margin-bottom: 20px; display: flex; align-items: center; gap: 15px;">
        <div class="avatar">👤</div>
        <div>
          <h3>Miriam (Cliente)</h3>
          <p style="color: var(--text-gray); margin: 0;">miriam@email.com</p>
        </div>
      </div>

      <div class="card">
        <h3>🚙 Meu Veículo</h3>
        <label>Modelo do Veículo</label>
        <select style="width: 100%; padding: 10px; border-radius: 6px; margin-top: 5px; background: rgba(0,0,0,0.1); color: var(--text-light); border: 1px solid #374151;">
          <option selected>Ford Mustang Mach-E</option>
          <option>Tesla Model 3</option>
          <option>BYD Seal</option>
          <option>Nissan Leaf</option>
        </select>

        <label style="margin-top: 15px; display: block;">Capacidade da Bateria (kWh)</label>
        <input type="number" value="88" style="width: 100%; padding: 10px; border-radius: 6px; margin-top: 5px; background: rgba(0,0,0,0.1); color: var(--text-light); border: 1px solid #374151;">
      </div>

      <div class="card" style="margin-top: 20px;">
        <h3>🔔 Preferências</h3>
        <div class="toggle-item">
          <div>
             <strong>Venda Automática</strong>
             <p style="font-size: 0.8rem; color: var(--text-gray);">Vender quando bateria > 90%</p>
          </div>
          <label class="switch"><input type="checkbox"><span class="slider round"></span></label>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .avatar { width: 50px; height: 50px; background: var(--primary-green); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; }
    .toggle-item { display: flex; justify-content: space-between; align-items: center; padding: 15px 0; border-bottom: 1px solid #374151; }
    .switch { position: relative; display: inline-block; width: 50px; height: 24px; }
    .switch input { opacity: 0; width: 0; height: 0; }
    .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #374151; transition: .4s; }
    .slider:before { position: absolute; content: ""; height: 18px; width: 18px; left: 3px; bottom: 3px; background-color: white; transition: .4s; }
    input:checked + .slider { background-color: var(--primary-green); }
    input:checked + .slider:before { transform: translateX(26px); }
    .slider.round { border-radius: 24px; }
    .slider.round:before { border-radius: 50%; }
    .fade-in { animation: fadeIn 0.5s ease-in; }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  `]
})
export class SettingsComponent {}
