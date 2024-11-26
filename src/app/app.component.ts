import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'ng-sell';
  // Hide Navbar and footer component
  public showNavbarFooter: boolean = true;
  // The container class will be applied to all pages except the home page and the error page.
  public isFullWidth: boolean = false;
  // Change mode dark to light
  public isDarkTheme: boolean = false;
  // Get items dial
  public itemDial: MenuItem[] | undefined;
  // Button download text
  public buttonDownloadText: string = 'CV';
  // Button name file download
  public nameFileDownload: string = 'dummy.pdf';
  // Button path file
  public pathFileDownload: string = '../assets/docs/dummy.pdf';

  constructor( 
    private _router: Router, 
    private _sharedService: SharedService,  
    private _cookieService: CookieService, 
    private _primengConfig: PrimeNGConfig ) {}

  ngOnInit(): void {
    // Ripple Effect in buttons
    this._primengConfig.ripple = true;
    this.hideNavigation();
    this.containerCustom();
    this.getCookies();
    this.getItemsDial();
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);  // Hace scroll al inicio de la página
      }
    });
  }

  // Get items dial
  getItemsDial() {
    this._sharedService.itemsDial.subscribe(items => {
      this.itemDial = items;
    });
    return this.itemDial;
  }

  // Subscribe to the dark mode status to apply the class
  darkMode(): void {
    this._sharedService.darkMode$.subscribe((isDarkMode) => {
      this.isDarkTheme = isDarkMode;
    });
  }

  // Hide navigation bar and footer on 404 page
  hideNavigation() {
    this._router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.showNavbarFooter = !['/404'].includes(event.urlAfterRedirects);
      }
    });
  }

  getCookies() {
     // Set a cookie
     this._cookieService.set('user-visited', 'true', 7); // Cookie expires in 7 days
     // Get a cookie
     const userVisited = this._cookieService.get('user-visited');
     // Check if a cookie exists
     const hasVisited = this._cookieService.check('user-visited');
  }

  // The container class will be applied to all pages except the home page and the error page.
  containerCustom() {
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
