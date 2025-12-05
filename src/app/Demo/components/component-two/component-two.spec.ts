import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTwo } from './component-two';

describe('ComponentTwo', () => {
  let component: ComponentTwo;
  let fixture: ComponentFixture<ComponentTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
