import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from '../../Guard/unsaved-changes-guard';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit,CanComponentDeactivate {

  registerForm!: FormGroup;
  
  genders: string[] = ['Male', 'Female', 'Other'];

  constructor(private fb: FormBuilder,private router : Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],   // ⬅️ Required validation
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      isSudlife: [false],                        // ⬅️ Checkbox
      dateOfBirth: ['', Validators.required]     // ⬅️ DOB
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: AbstractControl) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    console.log(this.registerForm.value);
  }

   goToLogin() {
    debugger
    this.router.navigate(['/login']);
  }
  
   // 👇 Important: Guard will call this
  isDirty(): boolean {
    return this.registerForm.dirty;
  }
}
