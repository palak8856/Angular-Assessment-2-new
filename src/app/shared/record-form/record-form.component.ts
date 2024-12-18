import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../app.model';


@Component({
  selector: 'app-record-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './record-form.component.html',
  styleUrl: './record-form.component.css',
})
export class RecordFormComponent {
  @Input() userForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      validators: [Validators.required],
    }),
    number: new FormControl(null, {
      validators: [Validators.required],
    }),
    address: new FormControl(null, {
      validators: [Validators.required],
    }),
  });

  @Output() formValues = new EventEmitter<User>();
  submitted = false;

  get isNameInvalid() {
    return (
      (this.userForm.controls['name'].touched || this.submitted) &&
      this.userForm.controls['name'].errors?.['required']
    );
  }

  get isEmailInvalid() {
    return (
      (this.userForm.controls['email'].touched || this.submitted) &&
      this.userForm.controls['email'].errors?.['required']
    );
  }

  get isPhoneNumberInvalid() {
    return (
      (this.userForm.controls['number'].touched || this.submitted) &&
      this.userForm.controls['number'].errors?.['required']
    );
  }

  get isAddressInvalid() {
    return (
      (this.userForm.controls['address'].touched || this.submitted) &&
      this.userForm.controls['address'].errors?.['required']
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      console.warn('Form is invalid');
      return;
    }
    const id = Math.random().toString();
    const user: User = {
      id,
      name: this.userForm.value.name!,
      email: this.userForm.value.email!,
      number: this.userForm.value.number!,
      address: this.userForm.value.address!,
    };
    this.formValues.emit(user);
  }
}