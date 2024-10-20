import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-cookies-banner',
  templateUrl: './cookies-banner.component.html',
  styleUrls: ['./cookies-banner.component.scss']
})
export class CookiesBannerComponent implements OnInit {

  public showBanner: boolean = true;
  // Dark Theme
  public isDarkMode: boolean = false;

  constructor( private _sharedService: SharedService, private _cookieService: CookieService ) { }

  ngOnInit(): void {
    this.checkCookiesAccepted();
    this.darkMode();
  }

  checkCookiesAccepted(): void {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted) {
      this.showBanner = false;
    }
  }

  acceptCookies(): void {
    localStorage.setItem('cookiesAccepted', 'true');
    this.showBanner = false;
  }


  darkMode(): void {
    // Subscribe to the dark mode status to apply the class
    this._sharedService.darkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

}
