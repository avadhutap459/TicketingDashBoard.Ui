import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenComponent } from './template-driven-component';

describe('TemplateDrivenComponent', () => {
  let component: TemplateDrivenComponent;
  let fixture: ComponentFixture<TemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateDrivenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
