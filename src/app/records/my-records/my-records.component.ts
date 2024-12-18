import { Component } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-my-records',
  imports: [],
  templateUrl: './my-records.component.html',
  styleUrl: './my-records.component.css'
})
export class MyRecordsComponent {
  constructor(private recordService: RecordsService) {}

  get myRecords() {
    return this.recordService.getMyRecords();
  }
}
