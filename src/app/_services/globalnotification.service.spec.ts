import { TestBed } from '@angular/core/testing';

import { GlobalnotificationService } from './globalnotification.service';

describe('GlobalnotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalnotificationService = TestBed.get(GlobalnotificationService);
    expect(service).toBeTruthy();
  });
});
