import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing-module';
import { ReactiveFormComponent } from '../reactive-form-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [
    ReactiveFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ReactiveRoutingModule,
    MaterialModule
  ]
})
export class ReactiveModule { }
