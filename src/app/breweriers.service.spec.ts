import { TestBed } from '@angular/core/testing';

import { BreweriersService } from './breweriers.service';

describe('BreweriersService', () => {
  let service: BreweriersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreweriersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
