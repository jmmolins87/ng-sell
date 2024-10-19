import { Location } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent {

  constructor( private _location: Location ) { }

  goBack() {
    this._location.back();
  }

}
