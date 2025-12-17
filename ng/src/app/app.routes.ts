import { Routes } from '@angular/router';
import { guestGuard, authGuard } from './core';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./routes/auth/login.component').then(m => m.LoginComponent),
    canActivate: [guestGuard]
  },
  {
    path: 'protected',
    loadComponent: () => import('./routes/protected/root.component').then(m => m.RootComponent),
    canActivate: [authGuard]
  },
  {
    path: 'protected/settings',
    loadComponent: () => import('./routes/protected/settings/settings.component').then(m => m.SettingsComponent),
    canActivate: [authGuard]
  },
  { path: '', redirectTo: 'protected', pathMatch: 'full' },
  { path: '**', redirectTo: 'protected' }
];
