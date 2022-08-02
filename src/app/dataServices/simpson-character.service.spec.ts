import { TestBed } from '@angular/core/testing';

import { SimpsonCharacterService } from './simpson-character.service';

describe('SimpsonCharacterService', () => {
  let service: SimpsonCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpsonCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
