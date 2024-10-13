import { Component } from '@angular/core';

import { titleTypes } from './../../components/title-pages/title.config';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public isFullWidth: boolean = false;
  public titleType: titleTypes = titleTypes.h1;
  public title!: string;

}
