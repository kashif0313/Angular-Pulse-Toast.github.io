import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastTemplate2Component } from './toast-template-2.component';

describe('ToastTemplate2Component', () => {
  let component: ToastTemplate2Component;
  let fixture: ComponentFixture<ToastTemplate2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastTemplate2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastTemplate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
