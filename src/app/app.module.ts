  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';

  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { UniqeDirective } from './uniqe.directive';
  // import { UniqeDirective } from './uniqe.directive';
  import { UserNameControlComponent } from './userNameControl/userNameControl.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

  @NgModule({
    declarations: [	
      AppComponent  ,
      UniqeDirective,
        UserNameControlComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,FormsModule,
      SharedModule,
      BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
