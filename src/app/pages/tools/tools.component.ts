import { Component, OnInit } from '@angular/core';

import { PagesService } from './../../services/pages-service.service';

import { toolsContent } from 'src/app/db/tool.db';

import { Tool } from '../../interfaces/tool.interface';
import { titleTypes } from '../../components/title-pages/title.config';


@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit{

  public titleType: titleTypes = titleTypes.h1;
  public title!: string;
  public toolsData: Tool[] = toolsContent;

  constructor( private _pagesService: PagesService ) { }

  ngOnInit(): void {
    this.tools;
  }

  // Function to get the tools from the service
  get tools() {
    this._pagesService.tools.subscribe((tools: Tool[]) => {
      this.toolsData = tools;
    });
    return this.toolsData;
  }

}
