import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { PagesService } from '../../services/pages-service.service';
import { titleTypes } from '../../components/title-pages/title.config';


@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  public linkAnimation!: string;
  public titleType: titleTypes = titleTypes.h3;

  constructor( private _location: Location, private _pageService: PagesService ) { }

  ngOnInit(): void {
    this._pageService.errorAnimation.subscribe((data: any) => {
      this.linkAnimation = data;
    });
  }

  scrollDown(): void {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }

  goBack() {
    this._location.back();
  }

}
