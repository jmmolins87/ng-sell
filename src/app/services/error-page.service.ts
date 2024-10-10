import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { errorPage } from '../db/error.db';

@Injectable({
  providedIn: 'root'
})
export class ErrorPageService {

  public iframeErrorUrl: string = errorPage.iframe || '';

  constructor( private _httpClient: HttpClient) { }

  get iframeErrorData(): Observable<any> {
    return this._httpClient.get<any>(this.iframeErrorUrl);
  }

}
