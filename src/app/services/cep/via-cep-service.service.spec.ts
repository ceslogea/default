import { TestBed, inject } from '@angular/core/testing';

import { ViaCepService } from './via-cep-service.service';

describe('ViaCepServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViaCepService]
    });
  });

  it('should be created', inject([ViaCepService], (service: ViaCepService) => {
    expect(service).toBeTruthy();
  }));
});
