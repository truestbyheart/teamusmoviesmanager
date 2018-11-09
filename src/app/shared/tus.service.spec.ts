import { TestBed, inject } from '@angular/core/testing';

import { TusService } from './tus.service';

describe('TusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TusService]
    });
  });

  it('should be created', inject([TusService], (service: TusService) => {
    expect(service).toBeTruthy();
  }));
});
