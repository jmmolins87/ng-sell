import { Component, Input, OnInit } from '@angular/core';

import { SharedService } from '../../shared/services/shared.service';
import { skillContent } from '../../db/skills.db';


@Component({
  selector: 'app-skill-tool',
  templateUrl: './skill-tool.component.html',
  styleUrls: ['./skill-tool.component.scss']
})
export class SkillToolComponent implements OnInit {
  
  // Get input
  @Input()
  public nameTag!: string;
  
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
