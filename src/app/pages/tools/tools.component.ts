import { 
  Component, 
  Input, 
  OnInit 
} from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { ToolsService } from '../../services/tools.service';

import { Tool } from '../../interfaces/tool.interface';
import { titleTypes } from '../../components/title-pages/title.config';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  public toolsData!: any[];
  public titleType: titleTypes = titleTypes.h1;

  constructor( private _toolsService: ToolsService, private _translateService: TranslateService ) { }

  ngOnInit(): void {
    this.tools;
    console.log(this.toolsData);

    this._translateService.get('TOOLS').subscribe((tools: any[]) => {
      this.toolsData = tools.map(tool => {
        this.toolsData = tool;
      });
    });
  }


  get tools() {
    this._toolsService.tools.subscribe((tools: Tool[]) => {
      this.toolsData = tools;
    });
    return this.toolsData;
  }

}
