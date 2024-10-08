import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isDarkTheme: boolean = false;
  public isFullWidth: boolean = true;
  public showNavbarFooter: boolean = true;

  constructor( private _router: Router ) {}

  ngOnInit(): void {
    // Hide navigation bar and footer on 404 page
    this._router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.showNavbarFooter = !['/404'].includes(event.urlAfterRedirects);
      }
    });
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
