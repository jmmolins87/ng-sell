import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

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

  constructor( private _router: Router, private primengConfig: PrimeNGConfig ) {}

  ngOnInit(): void {
    // Ripple Effect in buttons
    this.primengConfig.ripple = true;
    this.hideNavigation();
    this.containerCustom();
  }

  hideNavigation() {
    // Hide navigation bar and footer on 404 page
    this._router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.showNavbarFooter = !['/404'].includes(event.urlAfterRedirects);
      }
    });
  }

  containerCustom() {
    // The container class will be applied to all pages except the home page and the error page.
    this._router.events.subscribe(() => {
      this.isFullWidth = this._router.url === '/' || this._router.url === '/404';
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
