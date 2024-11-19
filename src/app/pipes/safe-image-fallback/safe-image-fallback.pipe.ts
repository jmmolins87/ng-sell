


import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeImageFallback'
})
export class SafeImageFallbackPipe implements PipeTransform {

  private defaultImageUrl = 'assets/img/no-image.png';

  constructor(private sanitizer: DomSanitizer) {}

  transform(imageUrl: string): SafeUrl {
    const safeUrl = imageUrl 
      ? this.sanitizer.bypassSecurityTrustUrl(imageUrl) 
      : this.sanitizer.bypassSecurityTrustUrl(this.defaultImageUrl);
    return safeUrl;
  }

}
