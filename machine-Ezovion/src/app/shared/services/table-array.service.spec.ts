import { TestBed } from '@angular/core/testing';

import { TableArrayService } from './table-array.service';

describe('TableArrayService', () => {
  let service: TableArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
