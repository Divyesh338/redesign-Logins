import { Routes } from '@angular/router';
import { Home } from "../app/components/home/home";
import { Admin } from './components/admin/admin';
import { NotFound } from './components/not-found/not-found';
import { Login1 } from './components/login1/login1';

export const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: '',
    component: Login1
  },
  {
    path: 'admin',
    component: Admin
  },
  {
    path: '**',
    component: NotFound
  },
];
