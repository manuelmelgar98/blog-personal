import { Component, inject } from '@angular/core';
import { FormLoginComponent } from "./form-login/form-login.component";
import { Login } from '../models/login.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormLoginComponent],
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  onSubmit(login: Login): void {
    const ok = this.authService.login(login.email, login.pass);
    if (ok) this.router.navigate(['/posts']);
    else console.warn('Credenciales inválidas');
    
  }
}
