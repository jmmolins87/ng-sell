import { Component, OnInit } from '@angular/core';

import { ToolsService } from '../../services/tools.service';

import { Tool } from '../../interfaces/tool.interface';
import { titleTypes } from '../../components/title-pages/title.config';
import { toolsContent } from '../../db/tool.db';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  public toolsData: Tool[] = [];
  public titleType: titleTypes = titleTypes.h1;
  public title!: string;


  constructor( private _toolsService: ToolsService ) {
  }

  ngOnInit(): void {
    this.tools;
  }

  // Function to get the tools from the service
  get tools() {
    this._toolsService.tools.subscribe((tools: Tool[]) => {
      this.toolsData = tools;
    });
    return this.toolsData;
  }

}
