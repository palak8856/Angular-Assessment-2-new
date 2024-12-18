import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import dummy_records from './records.data';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  records = dummy_records;
  myrecords= [];

  constructor(private authService: AuthService) {
    const records = this.getRecordsFromLocalStorage();
    const myRecords = this.getUserRecordsFromLocalStorage(
      this.authService.getUserName()
    );
    if (records) {
      this.records = records;
    }
    if (myRecords) {
      this.myRecords = myRecords;
    }
  }

  saveRecordsToLocalStorage(): void {
    localStorage.setItem('records', JSON.stringify(this.records));
  }

  saveUserRecordsToLocalStorage(userName: string): void {
    localStorage.setItem(userName, JSON.stringify(this.myRecords));
  }

  getRecordsFromLocalStorage() {
    if (!localStorage.getItem('records')) {
      return;
    }
    return JSON.parse(localStorage.getItem('records')!);
  }

  getUserRecordsFromLocalStorage(userName: string) {
    if (!localStorage.getItem(userName)) {
      return [];
    }
    return JSON.parse(localStorage.getItem(userName)!);
  }

  addRecord(record:Record): void {
    this.records.push(record);
    this.saveRecordsToLocalStorage();
  }

  getAllRecords(){
    return this.records;
  }

  getMyRecords(){
    return this.myRecords;
  }

  deleteRecord(recordName: string): void {
    this.records = this.records.filter((r) => r.name !== recordName);
    this.myRecords = this.myRecords.filter((r) => r.name !== recordName);
    this.saveRecordsToLocalStorage();
    this.saveUserRecordsToLocalStorage(this.authService.getUserName());
  }
}