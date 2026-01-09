import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/slider-login/slider-login').then(m => m.SliderLogin)
  },
  {
    path: 'login1',
    loadComponent: () => import('./components/login1/login1').then(m => m.Login1)
  },
  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found').then(m => m.NotFound)
  },
];
