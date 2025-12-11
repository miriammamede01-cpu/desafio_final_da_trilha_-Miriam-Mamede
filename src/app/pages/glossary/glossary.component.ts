import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glossary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container fade-in">
      <h2>📚 Glossário Técnico (V2G & TI)</h2>
      <p style="color: var(--text-gray);">Termos técnicos utilizados no projeto em inglês.</p>

      <div class="card">
        <ul>
          <li *ngFor="let item of terms">
            <strong style="color: var(--primary-green)">{{ item.term }}</strong>: {{ item.definition }}
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    ul { list-style: none; padding: 0; }
    li { padding: 15px 0; border-bottom: 1px solid #374151; }
    li:last-child { border-bottom: none; }
  `]
})
export class GlossaryComponent {
  terms = [
    { term: 'V2G (Vehicle-to-Grid)', definition: 'Tecnologia que permite que veículos elétricos devolvam energia para a rede elétrica.' },
    { term: 'API (Application Programming Interface)', definition: 'Conjunto de regras que permite que softwares se comuniquem (ex: o carro com o servidor).' },
    { term: 'Frontend', definition: 'A parte visual da aplicação onde o usuário interage (este site em Angular).' },
    { term: 'Component', definition: 'Blocos de código reutilizáveis no Angular (ex: a Navbar).' },
    { term: 'Data Binding', definition: 'Conexão automática entre a lógica (TypeScript) e a visualização (HTML).' },
    { term: 'Responsive Design', definition: 'Capacidade do site se adaptar a telas de celular e computador.' },
    { term: 'Deploy', definition: 'O ato de publicar a aplicação na internet.' }
  ];
}
