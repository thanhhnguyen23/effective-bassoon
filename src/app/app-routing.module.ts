import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { ReactiveFormValidation2Component } from './reactive-form-validation2/reactive-form-validation2.component';
import { ReactiveFormValidation4Component } from './reactive-form-validation4/reactive-form-validation4.component';

const routes: Routes = [
  { path: 'a', component: ReactiveFormValidationComponent },
  { path: 'b', component: ReactiveFormValidation2Component },
  { path: '', component: ReactiveFormValidation4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
