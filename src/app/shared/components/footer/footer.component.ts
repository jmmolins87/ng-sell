import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../services/shared.service';

import { FooterInterface } from '../../interface/footer.interface';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // Items Menu policies
  public footerContent!: FooterInterface[] | any[];
  // Get year
  public year = new Date().getFullYear();
  // Dark Theme
  public isDarkMode: boolean = false;

  constructor( private _sharedService: SharedService ) {}

  ngOnInit() {
    this.darkMode();

    setTimeout(() => {
      this.itemsFooter;
    }, 500)
  }

  get itemsFooter() {
    this._sharedService.itemsFooter.subscribe(items => {
      this.footerContent = items;
    });
    return this.footerContent;
  }

  darkMode(): void {
    // Subscribe to the dark mode status to apply the class
    this._sharedService.darkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

}
