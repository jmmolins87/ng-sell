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

  constructor( private _imageService: SharedService, private _sanitizer: DomSanitizer ) {}

  ngOnInit(): void {
    this.getLogoLight();
    this.getLogoDark();
  }

  getLogoLight() {
    this._imageService.logoLight.subscribe((data) => {
      if (data && this.imageKey in data) {
        const base64Image = data[this.imageKey];
        this.sanitizedImageUrl = this._sanitizer.bypassSecurityTrustUrl(base64Image);
      }
    });
  }

  getLogoDark() {
    this._imageService.logoDark.subscribe((data) => {
      if (data && this.imageKey in data) {
        const base64Image = data[this.imageKey];
        this.sanitizedImageUrl = this._sanitizer.bypassSecurityTrustUrl(base64Image);
      }
    });
  }

}
