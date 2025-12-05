import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guard/auth.guard';
import { DashboardResolver } from './Resolver/dashboard.resolver';
import { UnsavedChangesGuard } from './Guard/unsaved-changes-guard';
import { ComponentOne } from './Demo/components/component-one/component-one';
import { ComponentTwo } from './Demo/components/component-two/component-two';

const routes: Routes = [
  {
    path:'',
    redirectTo:'Form-Choose',
    pathMatch:'full'
  },
  {
    path:'register',
    loadChildren:() => import('./auth/auth.routes').then(m=>m.registerRoute)
  },
  {
    path:'componentsOne',
    component:ComponentOne
  },
  {
    path:'componentsTwo',
    component:ComponentTwo
  },
  {
    path:'Form-Choose',
    loadChildren: () => import('./SessionMangement/form-template-choose-component/template-choose/template-choose-module').then(m=>m.TemplateChooseModule)
  },
  {
    path:'TemplateDrivenForm',
    loadChildren:() => import('./SessionMangement/template-driven-component/template-driven/template-driven-module').then(m=>m.TemplateDrivenModule)
  },
  {
    path:'ReactiveForm',
    loadChildren:() => import('./SessionMangement/reactive-form-component/reactive/reactive-module').then(m=>m.ReactiveModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login-module').then(m => m.LoginModule),
    canDeactivate: [UnsavedChangesGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard-module').then(m => m.DashboardModule),
    canActivate: [AuthGuard],
    resolve: {dashboardData:DashboardResolver}

  },
  {
    path: '**',
    redirectTo: 'Form-Choose'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
