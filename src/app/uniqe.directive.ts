import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Custom } from './custom';

@Directive({
  selector: '[uniqe]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting:forwardRef(()=>UniqeDirective),
    multi: true
  }]
})
export class UniqeDirective implements Validator {

  constructor() { 
    console.log("UniqeDirective instance");
    
  }
  validate(control: AbstractControl): ValidationErrors {
      console.log("validte");
    return Custom.uniqe(control)
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }

}
