import { 
  Component, 
  Input, 
  OnChanges, 
  OnInit 
} from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { SharedService } from './../../shared/services/shared.service';

import { titleTypes } from './title.config';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-title-pages',
  templateUrl: './title-pages.component.html',
  styleUrls: ['./title-pages.component.scss']
})
export class TitlePagesComponent implements OnInit, OnChanges {
  
  // Title type
  @Input()
  public titleType!: titleTypes;
  // Title
  @Input()
  public title!: string;
  @Input()
  withUnderline: boolean = true;
  
  // Title translated
  public translatedTitle$: Observable<string> | null = null;
  // Skeleton loader
  public showSkeleton: boolean = true;
  // Dark Theme
  public isDarkMode: boolean = false;


  constructor( private _translate: TranslateService, private _sharedService: SharedService ) {}

  ngOnInit(): void {
    this.darkMode();
  }

  ngOnChanges() {
    if (this.title) {
      this.translatedTitle$ = this._translate.get(this.title);
      this.translatedTitle$.subscribe(() => {
        this.showSkeleton = false;
      });
    }
  }
  
  darkMode(): void {
    // Subscribe to the dark mode status to apply the class
    this._sharedService.darkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

}
