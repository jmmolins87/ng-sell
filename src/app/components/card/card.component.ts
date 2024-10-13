import { 
  Component, 
  Input, 
  OnInit 
} from '@angular/core';

import { SharedService } from './../../shared/services/shared.service';

import { Tool } from '../../interfaces/tool.interface';
import { titleTypes } from '../title-pages/title.config';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  // Dark Theme
  public isDarkMode: boolean = false;

  @Input()
  public tool!: Tool[];

  constructor( private _sharedService: SharedService ) { }

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

