import { Component, Input } from '@angular/core';

import { titleTypes } from './title.config';

@Component({
  selector: 'app-title-pages',
  templateUrl: './title-pages.component.html',
  styleUrls: ['./title-pages.component.scss']
})
export class TitlePagesComponent {

  @Input()
  public titleType!: titleTypes;
  @Input()
  public title!: string;

}
