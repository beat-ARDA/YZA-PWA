import { TestBed } from '@angular/core/testing';

import { SoiresumeService } from './soiresume.service';

describe('SoiresumeService', () => {
  let service: SoiresumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoiresumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
