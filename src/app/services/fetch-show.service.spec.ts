import { TestBed } from '@angular/core/testing';

import { FetchShowService } from './fetch-show.service';

describe('FetchShowService', () => {
  let service: FetchShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
