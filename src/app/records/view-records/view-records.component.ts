import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-view-records',
  imports: [],
  templateUrl: './view-records.component.html',
  styleUrl: './view-records.component.css'
})
export class ViewRecordsComponent {
  @Input() id!: string;
  constructor(
    private recordService: RecordsService,
    private authService: AuthService,
    private router: Router
  ) {}

  get userDetails() {
    return this.recordService.getAllRecords().find((r) => r.name === this.name);
  }

  get isAdmin() {
    return this.authService.isAdmin();
  }

  onDelete() {
    this.recordService.deleteRecord(this.name);
    this.router.navigate(['']);
  }
}
