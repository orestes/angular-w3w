import { TestBed, inject } from '@angular/core/testing';

import { W3wService } from './w3w.service';

describe('W3wService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [W3wService]
    });
  });

  it('should be created', inject([W3wService], (service: W3wService) => {
    expect(service).toBeTruthy();
  }));
});
