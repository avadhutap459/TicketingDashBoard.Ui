import { AbstractControl, ValidationErrors } from '@angular/forms';

export function minimumAgeValidator(minAge: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    const dob = control.value;
    if (!dob) return null; // field is empty → other validators will handle it

    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();

    if (
      age < minAge ||
      (age === minAge && today < new Date(birthDate.setFullYear(birthDate.getFullYear() + minAge)))
    ) {
      return { minAge: { requiredAge: minAge, actualAge: age } };
    }

    return null;
  };
}


