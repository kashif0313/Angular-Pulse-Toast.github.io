import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastTemplate1Component } from './toast-template-1.component';

describe('ToastTemplate1Component', () => {
  let component: ToastTemplate1Component;
  let fixture: ComponentFixture<ToastTemplate1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastTemplate1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastTemplate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
