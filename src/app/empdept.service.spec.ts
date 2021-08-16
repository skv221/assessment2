import { TestBed } from '@angular/core/testing';

import { EmpdeptService } from './empdept.service';

describe('EmpdeptService', () => {
  let service: EmpdeptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpdeptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
