import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guard/auth.guard';
import { DashboardResolver } from './Resolver/dashboard.resolver';
import { UnsavedChangesGuard } from './Guard/unsaved-changes-guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
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
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
