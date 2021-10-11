import { TestBed } from '@angular/core/testing';

import { FetchPeopleService } from './fetch-people.service';

describe('FetchPeopleService', () => {
  let service: FetchPeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchPeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
