import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPulseToastComponent } from './ngx-pulse-toast.component';

describe('NgxPulseToastComponent', () => {
  let component: NgxPulseToastComponent;
  let fixture: ComponentFixture<NgxPulseToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxPulseToastComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxPulseToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
