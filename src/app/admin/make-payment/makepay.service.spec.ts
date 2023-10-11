import { TestBed } from '@angular/core/testing';

import { MakepayService } from './makepay.service';

describe('MakepayService', () => {
  let service: MakepayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakepayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
