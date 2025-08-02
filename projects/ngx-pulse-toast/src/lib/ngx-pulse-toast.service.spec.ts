import { TestBed } from '@angular/core/testing';

import { NgxPulseToastService } from './ngx-pulse-toast.service';

describe('NgxPulseToastService', () => {
  let service: NgxPulseToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPulseToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
