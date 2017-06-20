import { TestBed, inject } from '@angular/core/testing';

import { WfInstanceService } from './wf-instance.service';

describe('WfInstanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WfInstanceService]
    });
  });

  it('should be created', inject([WfInstanceService], (service: WfInstanceService) => {
    expect(service).toBeTruthy();
  }));
});
