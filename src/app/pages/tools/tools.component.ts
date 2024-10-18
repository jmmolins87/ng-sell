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

  // Title type
  public titleType: titleTypes = titleTypes.h1;
  // Title
  public title!: string;
  // Get tools
  public toolsData: Tool[] = toolsContent;
  // Skeleton loader
  public showSkeleton: boolean = true;

  constructor( private _pagesService: PagesService ) { }

  ngOnInit(): void {
    
    setTimeout(() => {
      this.getTools();
    }, 500);
  }

  // Function to get the tools from the service
  getTools() {
    this._pagesService.tools.subscribe((tools: Tool[]) => {
      this.toolsData = tools;
      this.showSkeleton = false;
    });
  }

}
