import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashoardLayoutComponent } from './dashoard-layout-component';

describe('DashoardLayoutComponent', () => {
  let component: DashoardLayoutComponent;
  let fixture: ComponentFixture<DashoardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashoardLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashoardLayoutComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
