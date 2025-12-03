import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth-service';
import { CanComponentDeactivate } from '../../Guard/unsaved-changes-guard';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit,CanComponentDeactivate  {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private router : Router,private authsvc : AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;
    
    this.authsvc.login(this.loginForm.value).subscribe({
      next:(response : any) => {
        this.authsvc.setTokens(response.accessToken, response.refreshToken);
        this.router.navigate(['/dashboard']);
      },
      error:(err : any) => {

      }
    })
  }

  goToRegister() {
    debugger
    this.router.navigate(['/login/register']);
  }

   // 👇 Important: Guard will call this
  isDirty(): boolean {
    return this.loginForm.dirty;
  }
}
