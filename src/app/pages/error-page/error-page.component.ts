import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { PagesService } from '../../services/pages-service.service';
import { titleTypes } from '../../components/title-pages/title.config';
import { SharedService } from '../../shared/services/shared.service';


@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  // Animation for the link
  public linkAnimation!: string;
  // Get type title Page
  public titleType: titleTypes = titleTypes.h3;
  // Dark Theme
  public isDarkMode: boolean = false;

  constructor( private _sharedService: SharedService, private _location: Location, private _pageService: PagesService ) { }

  ngOnInit(): void {
    this._pageService.errorAnimation.subscribe((data: any) => {
      this.linkAnimation = data;
    });
    // Scroll to the top when the component is initialized
    window.scrollTo(0, 0);
    this.darkMode();
  }

  // Function to get the dark mode status
  darkMode(): void {
    // Subscribe to the dark mode status to apply the class
    this._sharedService.darkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  scrollDown(): void {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }

  goBack() {
    this._location.back();
  }

}
