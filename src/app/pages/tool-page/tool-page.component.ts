import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-tool-page',
  templateUrl: './tool-page.component.html',
  styleUrls: ['./tool-page.component.scss']
})
export class ToolPageComponent implements OnInit {

  // Dark Theme
  public isDarkMode: boolean = false;

  constructor( private _sharedService: SharedService ) {}

  ngOnInit() {
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
