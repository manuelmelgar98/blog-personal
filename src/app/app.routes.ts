import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./modules/auth/login.component').then(m => m.LoginComponent),
      },
      {
        path: 'posts',
        loadComponent: () =>
          import('./modules/posts/posts.component').then(m => m.PostsComponent),
      },
      {
        path: 'post/:id',
        loadComponent: () =>
          import('./modules/posts/post-detail.component').then(m => m.PostDetailComponent),
      },
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      { path: '**', redirectTo: 'posts' },
    ],
  },
];
