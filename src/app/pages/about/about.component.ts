import { Component } from '@angular/core';

import { titleTypes } from './../../components/title-pages/title.config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public title!: string;
  public titleType: titleTypes = titleTypes.h1;

}
