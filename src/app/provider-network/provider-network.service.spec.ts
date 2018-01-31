import { TestBed, inject } from '@angular/core/testing';

import { ProviderNetworkService } from './provider-network.service';

describe('ProviderNetworkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProviderNetworkService]
    });
  });

  it('should be created', inject([ProviderNetworkService], (service: ProviderNetworkService) => {
    expect(service).toBeTruthy();
  }));
});
