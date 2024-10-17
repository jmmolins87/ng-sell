import { 
  Component, 
  Input, 
  OnInit 
} from '@angular/core';

import { SharedService } from './../../shared/services/shared.service';

import { Tool } from '../../interfaces/tool.interface';
import { shapeSkeleton } from '../wrap-imgs/img.config';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  // Get tools
  @Input()
  public tool!: Tool;
  @Input()
  // Skeleton loader
  public showSkeleton: boolean = true;
  
  // Dark Theme
  public isDarkMode: boolean = false;
  // Shape of the skeleton loader
  public shapeSkeleton: shapeSkeleton = shapeSkeleton.CIRCLE;

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

