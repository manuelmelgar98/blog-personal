import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = signal<boolean>(false);

  login(email: string, pass: string): boolean {
    const ok = email === 'admin@test.com' && pass === '123456';
    this.isAuthenticated.set(ok);
    if (ok) localStorage.setItem('auth', 'true');
    return ok;
  }

  lagout(): void {
    this.isAuthenticated.set(false);
    localStorage.removeItem('auth');
  }

  restore(): void {
    this.isAuthenticated.set(localStorage.getItem('auth') === 'true')
  }

}
