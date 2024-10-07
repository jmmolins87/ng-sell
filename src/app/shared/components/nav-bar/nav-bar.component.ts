import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

import { SharedService } from '../../services/shared.service';
import { TranslatorService } from './../../../services/translator.service';

import { WrapperImg } from '../wrapper-imgs/interface/wrapperImg.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public items: MenuItem[] | undefined;
  public logoData: WrapperImg;

  // Traductor
  public langs: string[] = [];

  constructor( private _sharedService: SharedService, private _translator: TranslatorService ) {
    this.logoData = {
      src: '',
      alt: 'I sell myself',
      height: 70
    }

    this.langs = this._translator.langs;
    this._translator.changeLang(this.langs[0]);
  }

  ngOnInit(): void {
    this.logoNavbar;
    // this.itemsNavbar;
  }

  get logoNavbar() {
    return this._sharedService.logoNavbarL.subscribe(( data ) => {
      this.logoData.src = data.LOGO_NAVBAR_LIGHT;
    });
  }

  changeLang( lang: string ) {
    this._translator.changeLang(lang);
  }

  get itemsNavbar() {
    return this.items = this._sharedService.itemsNavbar;
  }

}
