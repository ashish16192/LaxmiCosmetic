import { TestBed } from '@angular/core/testing';

import { TryingService } from './trying.service';

describe('TryingService', () => {
  let service: TryingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TryingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
