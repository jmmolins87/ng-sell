import { 
  AfterViewInit, 
  Component, 
  ElementRef, 
  HostListener, 
  OnInit, 
  QueryList, 
  Renderer2, 
  ViewChildren,
  ViewChild  
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { filter } from 'rxjs/operators';

import { MenuItem } from 'primeng/api';

import { SharedService } from '../../services/shared.service';
import { TranslatorService } from './../../../services/translator.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, AfterViewInit {

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
  // Active Index
  public activeIndex: number = 0;
 
  // View Children Navbar Items 
  @ViewChildren('navItem') 
  public navItems!: QueryList<ElementRef>;
  // View Child Navbar Container 
  @ViewChild('navbarContainer') 
  public navbarContainer!: ElementRef;

  constructor( 
    private _sharedService: SharedService, 
    private _translator: TranslatorService,
    private _breakpointObserver: BreakpointObserver,
    private _router: Router,
    private renderer: Renderer2 ) { }

  ngOnInit(): void {
    // Get the current route to apply the class
    this.darkMode();
    // Get the current route to apply the class
    setTimeout(() => {
      this.getItemsNavbar();
    }, 500);
    this.removeAttr();
    // Subscribe to router events to update the active indicator
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateActiveIndicator();
    });
  }

  // After View Init
  ngAfterViewInit(): void {
    this.navItems.changes.subscribe(() => {
      this.updateActiveIndicator();
    });
    this.updateActiveIndicator();
  }

  // Detect scroll
  @HostListener('window: scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 0;
  }

  // Detect resize
  removeAttr() {
    this._breakpointObserver.observe([Breakpoints.Web])
      .subscribe(result => {
        this.isTablet = result.matches;
      });
  }

  // Get Items Navbar
  getItemsNavbar() {
    this._sharedService.itemsNavbar.subscribe(items => {
      this.menuItems = items;
    });
    return this.menuItems;
  }

  // Change Language
  changeLang( lang: string ) {
    this._translator.changeLang(lang);
  }

  // Toggle Dark Mode
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this._sharedService.toggleDarkMode(this.isDarkMode); // Change mode in the service
  }

  // Dark Mode
  darkMode(): void {
    // Subscribe to the dark mode status to apply the class
    this._sharedService.darkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  // Go Home
  goHome() {
    this._router.navigate(['/']);
  }

  // Active Item
  setActive(index: number): void {
    this.activeIndex = index;
    this.updateActiveIndicator();
  }

  // Update Active Indicator
  updateActiveIndicator(): void {
    if (this._router.url === '/') {
      // Do not update the active indicator on the home page
      this.renderer.setStyle(this.renderer.selectRootElement('.active-indicator', true), 'display', 'none');
      return;
    }

    // Ensure navItems is initialized and activeIndex is within bounds
    if (this.navItems && this.navItems.length > 0 && this.activeIndex < this.navItems.length) {
      // Get the active indicator element and the active item
      const activeIndicator = this.renderer.selectRootElement('.active-indicator', true);
      // Get the active item and the navbar container elements to calculate the offset left and width of the active indicator element 
      const activeItem = this.navItems.toArray()[this.activeIndex];
      // Get the navbar container element to calculate the offset left of the active indicator element
      const navbarRect = this.navbarContainer.nativeElement.getBoundingClientRect();
      // Calculate the offset left and width of the active indicator element based on the active item and navbar container elements 
      const offsetLeft = (activeItem.nativeElement.getBoundingClientRect().left - 144) - navbarRect.left; // 144 is the padding of the navbar container
      // Get the offset width of the active item element to set the width of the active indicator element
      const offsetWidth = activeItem.nativeElement.offsetWidth;

      // Add styles to the active indicator element
      this.renderer.setStyle(activeIndicator, 'transform', `translateX(${offsetLeft}px)`);
      this.renderer.setStyle(activeIndicator, 'width', `${offsetWidth}px`);
      this.renderer.setStyle(activeIndicator, 'display', 'block');
    }
  }

}
