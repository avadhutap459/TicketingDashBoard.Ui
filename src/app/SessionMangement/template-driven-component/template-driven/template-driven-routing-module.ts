import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDashboardLayoutComponent } from '../../form-dashboard-layout-component/form-dashboard-layout-component';
import { TemplateDrivenComponent } from '../template-driven-component';

const routes: Routes = [
  {
      path: '',
      component: FormDashboardLayoutComponent,
      children: [
        { path: '', component: TemplateDrivenComponent }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenRoutingModule { }
