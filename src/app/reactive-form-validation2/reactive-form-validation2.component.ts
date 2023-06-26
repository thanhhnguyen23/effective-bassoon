import { Component } from '@angular/core';
import { User } from './models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from './directives/email-validator.directive';

@Component({
  selector: 'app-reactive-form-validation2',
  templateUrl: './reactive-form-validation2.component.html',
  styleUrls: ['./reactive-form-validation2.component.css']
})
export class ReactiveFormValidation2Component {
  reactiveForm!: FormGroup;
  user: User;

  constructor() {
    this.user = {} as User;
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.user.name, [Validators.required, Validators.minLength(1), Validators.maxLength(250)]),
      nickname: new FormControl(this.user.nickname, [Validators.maxLength(10)]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator()
      ]),
      password: new FormControl(this.user.password, [Validators.required, Validators.minLength(15)])
    });
  }

  get name() {
    return this.reactiveForm.get('name')!;
  }

  get nickname() {
    return this.reactiveForm.get('nickname')!;
  }

  get email() {
    return this.reactiveForm.get('email')!;
  }

  get password() {
    return this.reactiveForm.get('password')!;
  }

  public validate(): void {
    if (this.reactiveForm.invalid) {
      for (const control of Object.keys(this.reactiveForm.controls)) {
        this.reactiveForm.controls[control].markAsTouched();
      }
      return;
    }

    this.user = this.reactiveForm.value;

    console.info('Name:', this.user.name);
    console.info('Nickname:', this.user.nickname);
    console.info('Email:', this.user.email);
    console.info('Password:', this.user.password);
  }
}
