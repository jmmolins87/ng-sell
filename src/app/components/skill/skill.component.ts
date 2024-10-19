import { Component, Input } from '@angular/core';

import { SharedService } from './../../shared/services/shared.service';

import { Skill } from './../../interfaces/skills.interface';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {

  // Get skills
  @Input()
  public skill!: Skill;
  // Skeleton loader
  @Input()
  public showSkeleton!: boolean;

  // Dark Theme
  public isDarkMode: boolean = false;

  constructor( private _sharedService: SharedService  ) { }

    ngOnInit(): void {
      this.darkMode();
    }

    darkMode(): void {
      // Subscribe to the dark mode status to apply the class
      this._sharedService.darkMode$.subscribe((isDarkMode) => {
        this.isDarkMode = isDarkMode;
    });
  }

}
