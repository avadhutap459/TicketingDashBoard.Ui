import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenRoutingModule } from './template-driven-routing-module';
import { TemplateDrivenComponent } from '../template-driven-component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';
import { MinAgeDirective } from '../min-age-directive';
import { MinSelectedDirective } from '../min-select-directive';


@NgModule({
  declarations: [
    TemplateDrivenComponent,
    MinAgeDirective,
    MinSelectedDirective
  ],
  imports: [
    FormsModule,
    CommonModule,
    TemplateDrivenRoutingModule,
    MaterialModule
  ]
})
export class TemplateDrivenModule { }
