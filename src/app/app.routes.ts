import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GlossaryComponent } from './pages/glossary/glossary.component';
import { SettingsComponent } from './pages/settings/settings.component';

import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const router = inject(Router);

  const isBrowser = typeof window !== 'undefined';

  if (isBrowser) {
    const user = localStorage.getItem('user_session');

    if (user) {
      return true;
    }
  }

  return router.createUrlTree(['/login']);
};

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'glossary', component: GlossaryComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [authGuard],
  },

  { path: '**', redirectTo: '' },
];
