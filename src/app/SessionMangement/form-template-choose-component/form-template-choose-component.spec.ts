import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateChooseComponent } from './form-template-choose-component';

describe('FormTemplateChooseComponent', () => {
  let component: FormTemplateChooseComponent;
  let fixture: ComponentFixture<FormTemplateChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormTemplateChooseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTemplateChooseComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
