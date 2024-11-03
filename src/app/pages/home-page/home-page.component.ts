import { Component, Input } from '@angular/core';

import { titleTypes } from '../../components/title-pages/title.config';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  
  public titleType: titleTypes = titleTypes.home;
  public title!: string;

  public textMatrix="Texto de ejemplo en efecto Matrix...";

}
