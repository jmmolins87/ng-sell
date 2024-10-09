import { 
  Component, 
  Input, 
  OnInit 
} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-wrap-logo',
  templateUrl: './wrap-logo.component.html',
  styleUrls: ['./wrap-logo.component.scss']
})
export class WrapLogoComponent implements OnInit {

  public sanitizedImageUrl!: SafeUrl;
  @Input() 
  public imageKey!: string; // The key to access the image from the JSON
  @Input()
  public alt!: string;
  @Input()
  public title!: string;
  @Input()
  public height!: number;

  constructor( private imageService: SharedService, private sanitizer: DomSanitizer ) {}

  ngOnInit(): void {
    this.getLogoLight();
    this.getLogoDark();
  }

  getLogoLight() {
    this.imageService.logoLight.subscribe((data) => {
      if (data && this.imageKey in data) {
        const base64Image = data[this.imageKey];
        this.sanitizedImageUrl = this.sanitizer.bypassSecurityTrustUrl(base64Image);
      }
    });
  }

  getLogoDark() {
    this.imageService.logoDark.subscribe((data) => {
      if (data && this.imageKey in data) {
        const base64Image = data[this.imageKey];
        this.sanitizedImageUrl = this.sanitizer.bypassSecurityTrustUrl(base64Image);
      }
    });
  }

}
