import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecordsComponent } from './edit-records.component';

describe('EditRecordsComponent', () => {
  let component: EditRecordsComponent;
  let fixture: ComponentFixture<EditRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRecordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
