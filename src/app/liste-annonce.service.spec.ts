import { TestBed } from '@angular/core/testing';

import { ListeAnnonceService } from './liste-annonce.service';

describe('ListeAnnonceService', () => {
  let service: ListeAnnonceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeAnnonceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
