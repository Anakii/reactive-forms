import { AbstractControl, ValidationErrors } from "@angular/forms";

export class Custom {
    static uniqe(control: AbstractControl): ValidationErrors {
        const db: string[] = ['or@or.com']

        if (db.indexOf(control.value) !== -1) {
            console.log("error");
            return ({ uniqe: false });
        }
        else {

            return (null);
        }

    }
}
