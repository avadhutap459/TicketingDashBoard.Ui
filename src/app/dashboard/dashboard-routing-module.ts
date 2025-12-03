import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashoardLayoutComponent } from './dashoard-layout-component/dashoard-layout-component';

const routes: Routes = [
  {
    path:'',
    component:DashoardLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
