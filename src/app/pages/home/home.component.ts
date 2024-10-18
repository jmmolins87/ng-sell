import { Component, Input } from '@angular/core';

import { titleTypes } from './../../components/title-pages/title.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  public titleType: titleTypes = titleTypes.home;
  public title!: string;

}
