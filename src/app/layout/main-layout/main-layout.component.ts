import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from "@angular/router";
import { CommonModule } from '@angular/common';
import { AuthService } from '../../modules/auth/services/auth.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
