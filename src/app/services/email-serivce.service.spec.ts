import { TestBed } from '@angular/core/testing';

import { EmailSerivceService } from './email-serivce.service';

describe('EmailSerivceService', () => {
  let service: EmailSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
