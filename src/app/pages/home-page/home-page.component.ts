import { Component, Input, OnInit } from '@angular/core';

import { SharedService } from '../../shared/services/shared.service';

import { titleTypes } from '../../components/title-pages/title.config';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  // Dark Theme
  public isDarkMode: boolean = false;
  // Title type
  public titleType: titleTypes = titleTypes.home;
  // Title text
  public title!: string;

  constructor( private _sharedService: SharedService ) { }

  ngOnInit(): void {
    this.darkMode();
  }
  
  // Function to get the dark mode status
  darkMode(): void {
    // Subscribe to the dark mode status to apply the class
    this._sharedService.darkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

}
