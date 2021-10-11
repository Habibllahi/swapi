import { TestBed } from '@angular/core/testing';

import { FetchFilmService } from './fetch-film.service';

describe('FetchFilmService', () => {
  let service: FetchFilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchFilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
