import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';


@Directive({
  selector: '[minSelected]',
  standalone:false,
  providers: [{ provide: NG_VALIDATORS, useExisting: MinSelectedDirective, multi: true }]
})
export class MinSelectedDirective implements Validator {
  @Input('minSelected') minSelected = 1;

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const count = Array.isArray(value) ? value.length : (value ? 1 : 0);
    return count >= this.minSelected ? null : { minSelected: { required: this.minSelected, actual: count } };
  }
}

