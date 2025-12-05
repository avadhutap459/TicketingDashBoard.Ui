import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateChooseRoutingModule } from './template-choose-routing-module';
import { FormTemplateChooseComponent } from '../form-template-choose-component';


@NgModule({
  declarations: [
    FormTemplateChooseComponent
  ],
  imports: [
    CommonModule,
    TemplateChooseRoutingModule
  ]
})
export class TemplateChooseModule { }
