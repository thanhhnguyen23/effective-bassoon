import { Directive, Input } from '@angular/core';
import { AbstractControl, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appForbiddenName]'
})
export class ForbiddenNameDirective implements Validator {
  constructor() {}

  @Input() forbiddenName!: string;

  validate(control: AbstractControl) {
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control) : null;
  }
}

export function forbiddenNameValidator(nameRe: RegExp) {
  return (control: AbstractControl) => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
