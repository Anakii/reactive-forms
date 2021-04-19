import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Custom } from './custom';

@Component({
  selector: 'app-root',
  template: `
  <form  [formGroup]="userForm" (ngSubmit)="onSubmit()">
    <app-userNameControl formControlName="userName" uniqe ></app-userNameControl>
    <input formControlName="password" required type="password" placeholder="enter password"/>
    <h5 *ngIf="userForm.get('userName').pending">pending...</h5>
    <h3>{{userForm.valid}}</h3>
    <button [disabled]="userForm.touched && !userForm.valid"type="submit">submit</button>
      <app-shared-drop-down formControlName="numOfKids" required uniqe [options]="options"></app-shared-drop-down>
    </form>      
    <router-outlet></router-outlet>
  `,
  // styles: ['input.ng-invalid{border:solid red 1px}']
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  options: any[] = [1, 2, 3, 4,"or@or.com"]

  ngOnInit(): void {


  }
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      userName: [null],
      password: ['', [Validators.required]],
      numOfKids: ['']
    })
  }
  onSubmit(){
    console.log(this.userForm);
    
  }
}
