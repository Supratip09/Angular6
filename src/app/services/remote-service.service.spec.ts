import { TestBed, inject } from '@angular/core/testing';

import { RemoteServiceService } from './remote-service.service';

describe('RemoteServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoteServiceService]
    });
  });

  it('should be created', inject([RemoteServiceService], (service: RemoteServiceService) => {
    expect(service).toBeTruthy();
  }));
});
