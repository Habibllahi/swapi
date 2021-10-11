import { TestBed } from '@angular/core/testing';

import { FetchStarshipService } from './fetch-starship.service';

describe('FetchStarshipService', () => {
  let service: FetchStarshipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchStarshipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
