import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LgpdBannerComponent } from './shared/lgpd-banner/lgpd-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, LgpdBannerComponent],
  template: `
    <app-navbar></app-navbar>

    <div class="main-content">
      <router-outlet></router-outlet>
    </div>

    <app-lgpd-banner></app-lgpd-banner>
  `,
  styles: [
    `
      .main-content {
        padding-top: 70px; /* Espaço para a navbar fixa não cobrir o conteúdo */
        min-height: 90vh;
      }
    `,
  ],
})
export class App {}
