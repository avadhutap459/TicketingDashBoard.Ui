import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { minimumAgeValidator } from './CustomValidation/minageValidator';

@Component({
  selector: 'app-reactive-form-component',
  standalone: false,
  templateUrl: './reactive-form-component.html',
  styleUrl: './reactive-form-component.css',
})
export class ReactiveFormComponent implements OnInit {

  countries = ['India', 'USA', 'Canada', 'Australia'];
  certifications = ['Angular', 'React', 'Azure', 'AWS', 'Python'];

  profileForm!: FormGroup;

  constructor() { }
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      dateOfBirth: new FormControl('', [
        Validators.required,
        minimumAgeValidator(18)        // 🔹 Custom Validator added
      ])
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      alert('Form submitted successfully!');
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  get f() {
    return this.profileForm.controls;
  }

}
