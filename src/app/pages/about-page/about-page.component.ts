import { Component } from '@angular/core';

import { titleTypes } from '../../components/title-pages/title.config';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {

  public title!: string;
  public titleType: titleTypes = titleTypes.h1;

}
