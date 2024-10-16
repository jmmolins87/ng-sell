import { Component, HostListener, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

import { SharedService } from '../../services/shared.service';
import { TranslatorService } from './../../../services/translator.service';


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
  // Scrolled
  public isScrolled: boolean = false;

  constructor( 
    private _sharedService: SharedService, 
    private _translator: TranslatorService ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.itemsNavbar;
    }, 500);
  }

  // Detect scroll
  @HostListener('window: scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 0;
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
    this._sharedService.toggleDarkMode(this.isDarkMode); // Change mode in the service
  }

}
