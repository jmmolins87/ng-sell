import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { navbarItems } from '../db/navbarItems.db';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // private logoNavbarLight: string = "assets/img/logo-sell-light.json";
  // private logoNavbarDark: string = "assets/img/logo-sell-dark.json";
  // private logoJson: string = "assets/img/logo-sell.json";

  private isDarkMode: boolean = false;

  // The initial theme is 'light' (false). If it is 'dark', it will be true.
  private darkModeSubject = new BehaviorSubject<boolean>(false);

  // Observable to which components can subscribe
  darkMode$ = this.darkModeSubject.asObservable();

  constructor( private _http: HttpClient ) { }

  get itemsNavbar() {
    return new Observable<any>(observer => {
      // Get items from db
      observer.next(navbarItems);
      // Complete observable
      observer.complete();
    });
  }

  get darkModeStatus() {
    return this.isDarkMode;
  }

  // Change the dark mode status
  toggleDarkMode(isDarkMode: boolean) {
    this.isDarkMode = !this.isDarkMode;
    this.darkModeSubject.next(isDarkMode);
    if( this.isDarkMode ) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
  }
}
