import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { navbarItems } from '../db/navbarItems.db';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private logoNavbarLight: string = "assets/img/logo-sell-light.json";

  constructor( private _http: HttpClient ) { }

  get itemsNavbar() {
    return navbarItems;
  }

  get logoNavbarL(): Observable<any> {
    return this._http.get<any>( this.logoNavbarLight )
  }
}
