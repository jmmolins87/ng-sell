import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Hide Navbar and footer component
  public showNavbarFooter: boolean = true;
  // The container class will be applied to all pages except the home page and the error page.
  public isFullWidth: boolean = false;
  // Change mode dark to light
  public isDarkTheme: boolean = false;

  constructor( private _router: Router, private cookieService: CookieService, private primengConfig: PrimeNGConfig ) {}

  ngOnInit(): void {
    // Ripple Effect in buttons
    this.primengConfig.ripple = true;
    this.hideNavigation();
    this.containerCustom();
    this.getCookies();
  }

  hideNavigation() {
    // Hide navigation bar and footer on 404 page
    this._router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.showNavbarFooter = !['/404'].includes(event.urlAfterRedirects);
      }
    });
  }

  getCookies() {
     // Set a cookie
     this.cookieService.set('user-visited', 'true', 7); // Cookie expires in 7 days
     // Get a cookie
     const userVisited = this.cookieService.get('user-visited');
     // Check if a cookie exists
     const hasVisited = this.cookieService.check('user-visited');
  }

  containerCustom() {
    // The container class will be applied to all pages except the home page and the error page.
    this._router.events.subscribe(() => {
      this.isFullWidth = this._router.url === '/' || this._router.url === '/404' || this._router.url === '/about';
    })
  }

  // Change mode dark to light
  toggleDarkMode() {
    this.isDarkTheme = !this.isDarkTheme;
    if ( this.isDarkTheme ) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
  
}
