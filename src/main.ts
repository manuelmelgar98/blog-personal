import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import '../public/assets/wc/app.js';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
