import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { 
  FormControl, 
  FormGroup, 
  ValidationErrors 
} from '@angular/forms';

import { Observable, of } from 'rxjs';

import { toolsContent } from './../db/tool.db';
import { skillContent } from '../db/skills.db';

import { Tool } from '../interfaces/tool.interface';
import { Skill } from '../interfaces/skills.interface';


@Injectable({
  providedIn: 'root'
})
export class PagesService {

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

  // About Page
  getSlides(): Observable<any[]> {
    // Simula una llamada a la base de datos
    const slides = [
      { type: 'title', content: 'Slide 1' },
      { type: 'title', content: 'Slide 2' },
      { type: 'title', content: 'Slide 3' },
      { type: 'title', content: 'Slide 4' }
    ];
    return of(slides);
  }

  // 404 Page
  get errorAnimation() {
    return this._http.get('assets/img/404/animation_error.json');
  }

  // Contact Page
  public isValidField( form: FormGroup, field: string ) {
    return form.controls[field].errors && form.controls[field].touched
  }
}
