import { PasswordValidator } from './password.validator';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {
  oldPassword = new FormControl('', [Validators.required], [PasswordValidator.validateOldPassword]);
  newPassword = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);

  form  = new FormGroup({
    oldPassword : this.oldPassword,
    newPassword : this.newPassword,
    confirmPassword : this.confirmPassword
  }, PasswordValidator.validateConfirmPassword);

  /**constructor(fb : FormBuilder){
    this.form = fb.group({
      oldPassword: this.oldPassword,
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword
    },{
      validator : PasswordValidator.validateConfirmPassword
    });
  }**/

}
