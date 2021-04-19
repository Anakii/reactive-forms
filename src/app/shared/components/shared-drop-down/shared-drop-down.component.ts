import { Component, EventEmitter, HostListener, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared-drop-down',
  templateUrl: './shared-drop-down.component.html',
  styleUrls: ['./shared-drop-down.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SharedDropDownComponent,
      multi: true
    }
  ]
})
export class SharedDropDownComponent implements OnInit, ControlValueAccessor {
  @Input() options: any[] = [];
  @Input() placeholderLabel: string;
  @Input() customOption: TemplateRef<any>;


  toggled: boolean = false;
  selected: any;
  onChange: (item: any) => void
  onTouched: () => void
  @HostListener("document:click", ['$event'])
  toggleSelect(event: MouseEvent): void {
    if (this.toggled === true)
      this.onToggle(event);
  }
  constructor() { }
  writeValue(obj: any): void {
    this.selected = obj
    console.log("!!!", obj);

    // throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
    // throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit() {
  }

  onToggle(event: MouseEvent): void {
    event.stopPropagation();
    this.toggled = !this.toggled;
  }
  onSelect(item: any): void {
    this.selected = item;
    this.onChange(item); // outher component will notify the form control in the parent that the value changed
    this.onTouched();
  }


}
