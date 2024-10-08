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

  // Items Menu
  public menuItems!: MenuItem[] | any[];

  // Traductor
  public langs: { lang: string, name: string }[] = [
    { lang: 'es', name: 'Español' },
    { lang: 'en', name: 'English' }
  ];

  // Dark Theme
  public isDarkMode: boolean = false;

  constructor( 
    private _sharedService: SharedService, 
    private _translator: TranslatorService ) {}

  ngOnInit(): void {
    this.itemsNavbar;
  }

  get itemsNavbar() {
    this._sharedService.itemsNavbar.subscribe(items => {
      this.menuItems = items;
    });
    return this.menuItems;
  }

  changeLang( lang: string ) {
    this._translator.changeLang(lang);
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this._sharedService.toggleDarkMode(this.isDarkMode); // Cambia el estado del modo oscuro
  }

}
