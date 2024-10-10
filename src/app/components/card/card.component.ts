import { 
  Component, 
  Input, 
  OnInit 
} from '@angular/core';

import { Tool } from '../../interfaces/tool.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  public tool!: Tool[];

  constructor() { }

  ngOnInit(): void {
   
  }
}
