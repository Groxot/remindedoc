import { TestBed, inject } from '@angular/core/testing';

import { DcItemsService } from './dc-items.service';

describe('DcItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DcItemsService]
    });
  });

  it('should be created', inject([DcItemsService], (service: DcItemsService) => {
    expect(service).toBeTruthy();
  }));
});
