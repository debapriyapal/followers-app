import { AbstractControl, ValidationErrors, FormControl, FormGroup } from '@angular/forms';

export class PasswordValidator {

    static validateOldPassword(control: FormControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, rejec) => {
            if (control.value === 'MyPersonal') {
                resolve({isOldPasswordValid: true});
            } else {
                resolve(null);
            }
        });
    }

    /**static validateConfirmPassword(control : FormControl) : ValidationErrors | null{
        console.log(control.parent);
        if(control.parent !== undefined && control.value !== control.parent.get("newPassword").value){
            return {isConfirmPasswordValid: true};
        }
        return null;
    }
    **/

    static validateConfirmPassword(control: AbstractControl) {
        console.log(control);
        const newPassword = control.get('newPassword').value;
        const confirmPassword = control.get('confirmPassword').value;
        if (newPassword !== confirmPassword) {
            return {isConfirmPasswordValid: true};
        }
        return null;
    }
}
