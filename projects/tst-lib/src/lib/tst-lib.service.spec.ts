import { TestBed } from '@angular/core/testing';

import { TstLibService } from './tst-lib.service';

describe('TstLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TstLibService = TestBed.get(TstLibService);
    expect(service).toBeTruthy();
  });
});
