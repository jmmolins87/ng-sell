import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { SafeImageFallbackPipe } from './safe-image-fallback.pipe';

describe('SafeImageFallbackPipe', () => {
  let pipe: SafeImageFallbackPipe;
  let sanitizer: jasmine.SpyObj<DomSanitizer>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustUrl']);

    TestBed.configureTestingModule({
      providers: [{ provide: DomSanitizer, useValue: spy }]
    });

    sanitizer = TestBed.inject(DomSanitizer) as jasmine.SpyObj<DomSanitizer>;
    pipe = new SafeImageFallbackPipe(sanitizer);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return sanitized URL when imageUrl is provided', () => {
    const imageUrl = 'http://example.com/image.jpg';
    const safeUrl: SafeUrl = {} as SafeUrl;
    sanitizer.bypassSecurityTrustUrl.and.returnValue(safeUrl);

    const result = pipe.transform(imageUrl);
    expect(sanitizer.bypassSecurityTrustUrl).toHaveBeenCalledWith(imageUrl);
    expect(result).toBe(safeUrl);
  });

  it('should return default sanitized URL when imageUrl is not provided', () => {
    const defaultImageUrl = 'assets/img/no-image.svg';
    const safeUrl: SafeUrl = {} as SafeUrl;
    sanitizer.bypassSecurityTrustUrl.and.returnValue(safeUrl);

    const result = pipe.transform('');
    expect(sanitizer.bypassSecurityTrustUrl).toHaveBeenCalledWith(defaultImageUrl);
    expect(result).toBe(safeUrl);
  });
});