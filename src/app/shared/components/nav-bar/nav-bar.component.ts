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

  // Logo Menu
  public menuItems!: MenuItem[] | any[];
  // Items Menu
  public logoData: WrapperImg;

  // Traductor
  public langs: string[] = [];

  public darkMode: boolean = false;

;

  constructor( 
    private _sharedService: SharedService, 
    private _translator: TranslatorService ) 
  {
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
    this.itemsNavbar;
  }

  get logoNavbar() {
    return this._sharedService.logoNavbar.subscribe(( data ) => {
      this.logoData.src = data.LOGO_NAVBAR_LIGHT;
    });
  }

  get itemsNavbar() {
    return this.menuItems = this._sharedService.itemsNavbar;
  }

  changeLang( lang: string ) {
    this._translator.changeLang(lang);
  }

  toggleDarkMode() {
    this._sharedService.toggleDarkMode();
    this.darkMode = !this.darkMode;
  }

}
