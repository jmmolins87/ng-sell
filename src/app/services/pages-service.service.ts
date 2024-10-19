import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { toolsContent } from './../db/tool.db';
import { skillContent } from '../db/skills.db';

import { Tool } from '../interfaces/tool.interface';
import { Skill } from '../interfaces/skills.interface';


@Injectable({
  providedIn: 'root'
})
export class PagesService {

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

  // Get data About Page
  get skills() {
    return new Observable<Skill[]>(observer => {
      // Get items from db
      observer.next(skillContent);
      // Complete observable
      observer.complete();
    });
  }
}
