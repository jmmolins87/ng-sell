import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'https://your-email-api-endpoint.com/send'; // Replace with your email API endpoint

  constructor(private _http: HttpClient) {}

  sendEmail(data: any): Observable<any> {
    return this._http.post(this.apiUrl, data);
  }
}