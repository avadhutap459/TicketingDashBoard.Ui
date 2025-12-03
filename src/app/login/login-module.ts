import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing-module';
import { LoginLayoutComponent } from './login-layout-component/login-layout-component';
import { Login } from './login/login';
import { Register } from './register/register';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth-service';


@NgModule({
  declarations: [
    LoginLayoutComponent,
    Login,
    Register
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LoginRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers:[
    AuthService
  ]
})
export class LoginModule { }
