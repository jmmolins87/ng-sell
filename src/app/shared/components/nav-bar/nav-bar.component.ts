import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
  // < Tablet
  public isTablet: boolean = false;
  // Mobile
  public isMenuOpen: boolean = false;

  constructor( 
    private _sharedService: SharedService, 
    private _translator: TranslatorService,
    private _breakpointObserver: BreakpointObserver ) { }

  ngOnInit(): void {
    // Get the current route to apply the class
    this.darkMode();
    // Get the current route to apply the class
    setTimeout(() => {
      this.itemsNavbar;
    }, 500);
    this.removeAttr();
  }

  // Detect scroll
  @HostListener('window: scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 0;
  }

  removeAttr() {
    this._breakpointObserver.observe([Breakpoints.Web])
      .subscribe(result => {
        this.isTablet = result.matches;
      });
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

  darkMode(): void {
    // Subscribe to the dark mode status to apply the class
    this._sharedService.darkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

}
