import { UsernameValidator } from './username.validator';
import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    UsernameValidator.noSpace
  ], [
    UsernameValidator.isUsernameValid
  ]);
  password = new FormControl('', Validators.required);
  form = new FormGroup({
    account: new FormGroup({
      username: this.username,
      password: this.password
    })
  });

  login() {
    this.form.setErrors({
      isLoginInvalid: true
    });
  }
}
