import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // Get year
  public year = new Date().getFullYear();
  // Dark Theme
  public isDarkMode: boolean = false;

  constructor( private _sharedService: SharedService ) {}

  ngOnInit() {
    // Subscribe to the dark mode status to apply the class
    this._sharedService.darkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

}