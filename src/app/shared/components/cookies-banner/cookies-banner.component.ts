import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookies-banner',
  templateUrl: './cookies-banner.component.html',
  styleUrls: ['./cookies-banner.component.scss']
})
export class CookiesBannerComponent implements OnInit {

  public showBanner: boolean = true;

  constructor( private _cookieService: CookieService ) { }

  ngOnInit(): void {
    // Check if the user has already accepted cookies
    const hasAccepted = this._cookieService.check('cookies-accepted');
    if (hasAccepted) {
      this.showBanner = true;
    }
  }

  acceptCookies(): void {
    // Set a cookie to remember the user's acceptance
    this._cookieService.set('cookies-accepted', 'true', 365); // Cookie expires in 1 year
    this.showBanner = true;
  }

}
