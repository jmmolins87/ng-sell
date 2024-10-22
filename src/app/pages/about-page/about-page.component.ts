import { Component, HostListener, OnInit } from '@angular/core';

import { SharedService } from './../../shared/services/shared.service';
import { PagesService } from './../../services/pages-service.service';

import { titleTypes } from './../../components/title-pages/title.config';
import { Skill } from './../../interfaces/skills.interface';
import { skillContent } from './../../db/skills.db';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  // Dark Theme
  public isDarkMode: boolean = false;
  // Get type title Page
  public titlePageType: titleTypes = titleTypes.h1;
  // Get title Skills
  public titleSkillsType: titleTypes = titleTypes.h2;
  // Get skill
  public skillData: Skill[] = skillContent;
  // Skeleton loader
  public showSkeleton: boolean = true;

  constructor( private _sharedService: SharedService, private _pagesService: PagesService ) {}

  ngOnInit(): void {
    this.darkMode();
    
    setTimeout(() => {
      this.getSkills();
    }, 500);
  }

  // Function to get the dark mode status
  darkMode(): void {
    // Subscribe to the dark mode status to apply the class
    this._sharedService.darkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  // get skills
  getSkills() {
    this._pagesService.skills.subscribe((skills: Skill[]) => {
      this.skillData = skills;
      this.showSkeleton = false;
    });
  }

}
