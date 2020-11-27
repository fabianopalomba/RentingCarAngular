import { TestBed } from '@angular/core/testing';

import { RentsDataService } from './rents-data.service';

describe('RentsDataService', () => {
  let service: RentsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
