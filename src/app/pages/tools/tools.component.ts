import { 
  Component, 
  Input, 
  OnInit 
} from '@angular/core';

import { ToolsService } from '../../services/tools.service';

import { Tool } from '../../interfaces/tool.interface';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  public toolsData!: any[];

  constructor( private _toolsService: ToolsService ) { }

  ngOnInit(): void {
    this.tools;
    console.log(this.toolsData);
  }

  get tools() {
    this._toolsService.tools.subscribe((tools: Tool[]) => {
      this.toolsData = tools;
    });
    return this.toolsData;
  }

}
