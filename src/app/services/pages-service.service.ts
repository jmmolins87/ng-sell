import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { toolsContent } from './../db/tool.db';
import { skillContent } from '../db/skills.db';

import { Tool } from '../interfaces/tool.interface';
import { Skill } from '../interfaces/skills.interface';


@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private errorJon!: string;

  constructor( private _http: HttpClient ) { }

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

  get errorAnimation() {
    return this._http.get('assets/img/404/animation_error.json');
  }
}
