import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashoardLayoutComponent } from './dashoard-layout-component/dashoard-layout-component';
import { DashboardRoutingModule } from './dashboard-routing-module';


@NgModule({
  declarations: [
    DashoardLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
