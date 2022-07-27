import { TestBed } from '@angular/core/testing';

import { RunningbacksService } from './runningbacks.service';

describe('RunningbacksService', () => {
  let service: RunningbacksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunningbacksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
