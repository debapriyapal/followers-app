import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidator {
    static noSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return {noSpace: true};
        }
        return null;
    }

    static isUsernameValid(control: AbstractControl): Promise<ValidationErrors|null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Ok');
                if (control.value === 'Deb') {
                    return resolve({isUsernameValid : true});
                } else {
                    return resolve(null);
                }
            }, 2000);
        });

    }
}
