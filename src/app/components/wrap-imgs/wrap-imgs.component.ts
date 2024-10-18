import { 
  Component, 
  Input, 
  OnInit 
} from '@angular/core';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { shapeSkeleton } from './img.config';

@Component({
  selector: 'app-wrap-imgs',
  templateUrl: './wrap-imgs.component.html',
  styleUrls: ['./wrap-imgs.component.scss']
})
export class WrapImgsComponent implements OnInit {

  // Input properties
  // Image source
  @Input()
  public imageSrc!: string;
  // Alt image
  @Input()
  public altImg!: string;
  // Height of the image
  @Input()
  public height!: number;
  // When is logo or not
  @Input()
  public isLogo!: boolean;
  // Shape of the skeleton loader
  @Input()
  public shapeSkeleton!: shapeSkeleton;
  // Show the skeleton loader
  @Input()
  public showSkeleton: boolean = true;
  
  public safeImgUrl: SafeUrl | undefined;

  constructor( private _sanitizer: DomSanitizer ) {}

  ngOnInit(): void {
    // Sanitize image URL
    this.safeImgUrl = this.sanitizeUrl(this.imageSrc);
  }

  sanitizeUrl(url: string): SafeUrl {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }

  onLoad(): void {
    // Hidden loading skeleton
    this.showSkeleton = false;
  }

}
