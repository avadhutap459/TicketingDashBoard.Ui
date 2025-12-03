import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './login-layout-component/login-layout-component';
import { Login } from './login/login';
import { Register } from './register/register';

const routes: Routes = [
  {
    path:'',
    component:LoginLayoutComponent,
    children : [
      {path:'',component:Login},
       {path:'register',component:Register}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
