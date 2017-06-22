import { TestBed, inject } from '@angular/core/testing';

import { ElmsApiService } from './elms-api.service';

describe('ElmsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElmsApiService]
    });
  });

  it('should be created', inject([ElmsApiService], (service: ElmsApiService) => {
    expect(service).toBeTruthy();
  }));
});
