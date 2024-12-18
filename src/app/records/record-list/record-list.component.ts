import { Component } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-record-list',
  imports: [],
  templateUrl: './record-list.component.html',
  styleUrl: './record-list.component.css'
})
export class RecordListComponent {
constructor(private recordsService: RecordsService){
  get users(){
    return this.recordsService.getAllUsers();
  }
}
}
