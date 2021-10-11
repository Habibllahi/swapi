import { TestBed } from '@angular/core/testing';

import { FetchPlanetService } from './fetch-planet.service';

describe('FetchPlanetService', () => {
  let service: FetchPlanetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchPlanetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
