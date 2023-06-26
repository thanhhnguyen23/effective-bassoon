import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormValidation2Component } from './reactive-form-validation2/reactive-form-validation2.component';
import { EmailValidatorDirective } from './reactive-form-validation2/directives/email-validator.directive';
import { ReactiveFormValidation4Component } from './reactive-form-validation4/reactive-form-validation4.component';
import { ForbiddenNameDirective } from './reactive-form-validation4/shared/forbidden-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormValidationComponent,
    ReactiveFormValidation2Component,
    EmailValidatorDirective,
    ReactiveFormValidation4Component,
    ForbiddenNameDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
