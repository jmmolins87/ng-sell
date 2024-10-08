import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  public textInfo: string = '¡¡Este no es el camino correcto!!';
  public textButton: string = 'Volvamos a empezar';

  constructor( private _route: Router ) {}

  goBack() {
    this._route.navigate(['/']);
  }

}
