import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDashboardLayoutComponent } from '../../form-dashboard-layout-component/form-dashboard-layout-component';
import { ReactiveFormComponent } from '../reactive-form-component';

const routes: Routes = [
  {
        path: '',
        component: FormDashboardLayoutComponent,
        children: [
          { path: '', component: ReactiveFormComponent }
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
