import { 
  Component, 
  Input, 
  OnInit 
} from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { SharedService } from './../../shared/services/shared.service';

import { Tool } from '../../interfaces/tool.interface';
import { toolsContent } from '../../db/tool.db';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  // Dark Theme
  public isDarkMode: boolean = false;
  // Skeleton loader
  public showSkeleton: boolean = true;

  @Input()
  public tool: Tool = toolsContent[0];

  constructor( private _translate: TranslateService, private _sharedService: SharedService  ) { }

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

