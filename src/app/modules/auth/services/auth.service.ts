import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _auth = signal<boolean>(false);

  isAuthenticated(): boolean {
    return this._auth();
  }

  login(email: string, pass: string): boolean {
    const ok = email === 'admin@test.com' && pass === '123456';
    this._auth.set(ok);
    if (ok) localStorage.setItem('auth', 'true');
    return ok;
  }

  restore(): void {
    this._auth.set(localStorage.getItem('auth') === 'true');
  }

  logout(): void {
    this._auth.set(false);
    localStorage.removeItem('auth');
  }
}
