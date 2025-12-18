import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="logo">⚡ V2G Energy</div>
      <ul class="nav-links">
        <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
        <li><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></li>
        <li><a routerLink="/glossary" routerLinkActive="active">Glossário (Tech)</a></li>
        <li><a routerLink="/settings" routerLinkActive="active">⚙️ Config</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex; justify-content: space-between; align-items: center;
      padding: 1rem 2rem; background-color: rgba(31, 41, 55, 0.95); /* Meio transparente */
      position: fixed; width: 100%; top: 0; z-index: 100;
      box-sizing: border-box; border-bottom: 1px solid #374151;
    }
    .logo { font-weight: bold; font-size: 1.5rem; color: var(--primary-green); }
    .nav-links { display: flex; gap: 20px; list-style: none; margin: 0; padding: 0; }
    .nav-links a { text-decoration: none; color: var(--text-gray); font-weight: 500; transition: color 0.3s; }
    .nav-links a.active, .nav-links a:hover { color: var(--primary-green); }

    /* Responsividade para celular */
    @media (max-width: 768px) {
      .navbar { flex-direction: column; padding: 1rem; }
      .nav-links { margin-top: 15px; gap: 15px; font-size: 0.9rem; }
    }
  `]
})
export class NavbarComponent {
  get isLogged() {
    return !!localStorage.getItem('user_session');
  }

  logout() {
    localStorage.removeItem('user_session');
    window.location.href = '/'; // Força refresh pra limpar estado
  }
}
