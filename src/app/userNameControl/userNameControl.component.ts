import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-userNameControl',
  template: ` 
    <input placeholder="enter" [ngModel]="value" (ngModelChange)="setValue($event)" type="text"/>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: UserNameControlComponent,
      multi: true
    }
  ],
  styles: []
})
export class UserNameControlComponent implements ControlValueAccessor {
  value: string = '';
  onChange: (value: string) => {}
  onTouch: () => { }



  setValue(value: string) {
    this.value = value;
    this.onChange(this.value);
    this.onTouch();
  }

  writeValue(value: string): void {
    this.value = value;
    console.log(this.value);

  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }



}
