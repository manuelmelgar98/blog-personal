import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { MainLayoutComponent } from './app/layout/main-layout.component';

bootstrapApplication(MainLayoutComponent, {
  providers: [provideRouter(routes)],
});
