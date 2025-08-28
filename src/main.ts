import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import '../public/assets/wc/app.js';
import { AuthService } from './app/modules/auth/services/auth.service';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).then(ref => {
  const injector = ref.injector;
  injector.get(AuthService).restore();
});
