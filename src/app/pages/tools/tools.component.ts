import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { PagesService } from './../../services/pages-service.service';

import { Tool } from '../../interfaces/tool.interface';
import { titleTypes } from '../../components/title-pages/title.config';


@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  public toolsData: Tool[] = [];
  public titleType: titleTypes = titleTypes.h1;
  public title!: string;


  constructor( private _pagesService: PagesService, private translate: TranslateService ) {
  }

  ngOnInit(): void {
    this.tools;
    this.loadTools();
  }

  // Function to get the tools from the service
  loadTools() {
    this._pagesService.tools.subscribe((tools: Tool[]) => {
      this.toolsData = tools.map(tool => this.translateTool(tool));
    });
  }

  // Function to translate tool data
  translateTool(tool: Tool): Tool {
    return {
      ...tool,
      title: this.translate.instant(tool.title || ''),
      subtitle: this.translate.instant(tool.subtitle || ''),
      description: this.translate.instant(tool.description || ''),
      tags: tool.tags ? tool.tags.map(tag => this.translate.instant(tag)) : [],
      web: this.translate.instant(tool.web || '')
    };
  }

  // Function to get the tools from the service
  get tools() {
    this._pagesService.tools.subscribe((tools: Tool[]) => {
      this.toolsData = tools;
    });
    return this.toolsData;
  }

}
