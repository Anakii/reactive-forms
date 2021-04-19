import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDropDownComponent } from './components/shared-drop-down/shared-drop-down.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [	
    SharedDropDownComponent
],
  imports: [
    CommonModule,
    // BrowserAnimationsModule
],
exports:[SharedDropDownComponent]
})
export class SharedModule { }
