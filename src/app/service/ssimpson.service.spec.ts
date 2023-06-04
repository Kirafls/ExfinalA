import { TestBed } from '@angular/core/testing';

import { SsimpsonService } from './ssimpson.service';

describe('SsimpsonService', () => {
  let service: SsimpsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsimpsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
