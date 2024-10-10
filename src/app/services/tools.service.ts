import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { toolsContent } from './../db/tool.db';

import { Tool } from '../interfaces/tool.interface';


@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  // Get tools
  get tools() {
    return new Observable<Tool[]>(observer => {
      // Get items from db
      observer.next(toolsContent);
      // Complete observable
      observer.complete();
    });
  }
 
}
