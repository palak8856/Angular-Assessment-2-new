import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}

  get userStatus(): string {
    return this.authService.isAdmin() ? 'Admin' : 'User';
  }

  get isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  handleLogOut() {
    this.authService.logout();
  }
}