import { TestBed } from '@angular/core/testing';

import { SnasaService } from './snasa.service';

describe('SnasaService', () => {
  let service: SnasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
