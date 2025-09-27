import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home').then(m => m.Home)
  },
  {
    path: 'sliderLogin',
    loadComponent: () => import('./components/slider-login/slider-login').then(m => m.SliderLogin)
  },
  {
    path: 'login1',
    loadComponent: () => import('./components/login1/login1').then(m => m.Login1)
  },
  {
    path: 'admin',
    loadComponent: () => import('./components/admin/admin').then(m => m.Admin)
  },
  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found').then(m => m.NotFound)
  },
];
