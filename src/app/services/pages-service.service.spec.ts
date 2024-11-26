import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EmailService } from './email-serivce.service';

describe('EmailService', () => {
  let service: EmailService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmailService]
    });
    service = TestBed.inject(EmailService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send an email', () => {
    const dummyData = { to: 'test@example.com', subject: 'Test', body: 'This is a test email.' };

    service.sendEmail(dummyData).subscribe(response => {
      expect(response).toEqual(dummyData);
    });

    const req = httpMock.expectOne('http://localhost:3000/send-email');
    expect(req.request.method).toBe('POST');
    req.flush(dummyData);
  });
});