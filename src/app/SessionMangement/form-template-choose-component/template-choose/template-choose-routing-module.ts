import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTemplateChooseComponent } from '../form-template-choose-component';

const routes: Routes = [
  {
      path:'',
      component:FormTemplateChooseComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateChooseRoutingModule { }
