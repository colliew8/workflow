import { TestBed, inject } from '@angular/core/testing';

import { RateTypeService } from './rate-type.service';

describe('RateTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RateTypeService]
    });
  });

  it('should be created', inject([RateTypeService], (service: RateTypeService) => {
    expect(service).toBeTruthy();
  }));
});
