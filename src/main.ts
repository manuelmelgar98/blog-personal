import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import '../public/assets/wc/app.js';
import { APP_INITIALIZER } from '@angular/core';
import { AuthService } from './app/modules/auth/services/auth.service';
import { provideHttpClient } from '@angular/common/http';

function initAuth(auth: AuthService) {
  return () => auth.restore();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: APP_INITIALIZER, useFactory: initAuth, deps: [AuthService], multi: true }
  ],
});
