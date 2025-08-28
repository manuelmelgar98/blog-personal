import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { authGuard } from './modules/auth/guards/auth.guard';
import { loginRedirectGuard } from './modules/auth/guards/login-redirect.guard';

export const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        canActivate: [loginRedirectGuard],
        loadComponent: () =>
          import('./modules/auth/components/auth.component').then(m => m.AuthComponent),
      },      
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'posts',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./modules/posts/components/posts.component').then(m => m.PostsComponent),
      },      
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'posts' }
];
