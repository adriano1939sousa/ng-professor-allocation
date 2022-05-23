import { TestBed } from '@angular/core/testing';

import { CouseService } from './course.service';

describe('CouseService', () => {
  let service: CouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
