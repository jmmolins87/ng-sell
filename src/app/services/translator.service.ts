import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  public langs: string[] = [];

  constructor( private _translator: TranslateService ) { 
    this._translator.setDefaultLang('es');
    this._translator.use('es');
    this._translator.addLangs(['es', 'en']);
    this.langs = this._translator.getLangs();
  }

  changeLang( lang: string ) {
    this._translator.use( lang );
  }
}
