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

  @Input()
  public imageSrc!: string;
  @Input()
  public altImg!: string;
  @Input()
  public height!: number;
  @Input()
  public isLogo!: boolean;
  @Input()
  public shapeSkeleton!: shapeSkeleton;

  public safeImgUrl: SafeUrl | undefined;
  public isLoaded: boolean = true;

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
    this.isLoaded = false;
  }

}
