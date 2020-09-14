import { TestBed } from '@angular/core/testing';

import { PlanetHttpService } from './planet-http.service';

describe('PlanetHttpService', () => {
  let service: PlanetHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
