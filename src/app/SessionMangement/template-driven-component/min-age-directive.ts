
// validators/min-age.directive.ts
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[minAge]',
  standalone:false,
  providers: [{ provide: NG_VALIDATORS, useExisting: MinAgeDirective, multi: true }]
})
export class MinAgeDirective implements Validator {
  @Input('minAge') minAge: number | string = 18;

  private get minAgeNum(): number {
    return typeof this.minAge === 'string' ? Number(this.minAge) : this.minAge;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    debugger
    const value = control.value;
    if (!value) return null;

    const dob = new Date(value);
    if (isNaN(dob.getTime())) return { minAge: { invalidDate: true } };

    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;

    
    const minAge = this.minAgeNum;
    return age >= minAge ? null : { minAge: { requiredAge: minAge, actualAge: age } };
  }
}
