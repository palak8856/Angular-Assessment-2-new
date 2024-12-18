import { Component, Input } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../app.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-record-item',
  imports: [],
  templateUrl: './record-item.component.html',
  styleUrl: './record-item.component.css'
})
export class RecordItemComponent {
  @Input({
    required: true,
  })
  user!: User;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  get isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  onView() {
    this.router.navigate(['view', this.user.name]);
  }
}
