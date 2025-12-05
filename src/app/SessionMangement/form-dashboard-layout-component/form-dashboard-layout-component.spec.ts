import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDashboardLayoutComponent } from './form-dashboard-layout-component';

describe('FormDashboardLayoutComponent', () => {
  let component: FormDashboardLayoutComponent;
  let fixture: ComponentFixture<FormDashboardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDashboardLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDashboardLayoutComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
