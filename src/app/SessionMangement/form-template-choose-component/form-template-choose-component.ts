import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-template-choose-component',
  standalone: false,
  templateUrl: './form-template-choose-component.html',
  styleUrl: './form-template-choose-component.css',
})
export class FormTemplateChooseComponent {

  constructor(private router : Router){}

  GoToReactive(){
    this.router.navigate(['/ReactiveForm'])
  }
  GoToTemplate(){
    this.router.navigate(['/TemplateDrivenForm'])
  }
}
