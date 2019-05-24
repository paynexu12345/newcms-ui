import { TestBed } from '@angular/core/testing';

import { CmsCommonService } from './cms-common.service';

describe('CmsCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CmsCommonService = TestBed.get(CmsCommonService);
    expect(service).toBeTruthy();
  });
});
