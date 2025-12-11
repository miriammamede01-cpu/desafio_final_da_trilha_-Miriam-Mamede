import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { GlossaryComponent } from './pages/glossary/glossary.component';

export const routes: Routes = [
  { path: '', component: LandingComponent }, // Home (Imagem 2)
  { path: 'dashboard', component: DashboardComponent }, // Painel (Imagem 1)
  { path: 'settings', component: SettingsComponent }, // Config (Imagem 3)
  { path: 'glossary', component: GlossaryComponent }, // Extra para a banca
  { path: '**', redirectTo: '' },
];
