import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastTemplate3Component } from './toast-template-3.component';

describe('ToastTemplate3Component', () => {
  let component: ToastTemplate3Component;
  let fixture: ComponentFixture<ToastTemplate3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastTemplate3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastTemplate3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
