import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { navbarItems } from '../db/navbarItems.db';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private logoNavbarLight: string = "assets/img/logo-sell-light.json";
  private logoNavbarDark: string = "assets/img/logo-sell-dark.json";

  private isDarkMode: boolean = false;

  constructor( private _http: HttpClient ) { }

  get itemsNavbar() {
    return navbarItems;
  }

  get logoNavbar(): Observable<any> {
    if( this.isDarkMode ) {
      return this._http.get<any>( this.logoNavbarDark )
    } else {
      return this._http.get<any>( this.logoNavbarLight )
    }
  }

  get darkModeStatus() {
    return this.isDarkMode;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if( this.isDarkMode ) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
  }
}
