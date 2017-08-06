import { TestBed, inject } from '@angular/core/testing';

import { MercadolivreService } from './mercadolivre.service';

describe('MercadolivreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MercadolivreService]
    });
  });

  it('should be created', inject([MercadolivreService], (service: MercadolivreService) => {
    expect(service).toBeTruthy();
  }));
});
