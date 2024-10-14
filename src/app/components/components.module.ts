import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { CardComponent } from './card/card.component';
import { TitlePagesComponent } from './title-pages/title-pages.component';
import { DownloadButtonComponent } from './download-button/download-button.component';



@NgModule({
  declarations: [
    CardComponent,
    DownloadButtonComponent,
    TitlePagesComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    TranslateModule
  ],
  exports: [
    CardComponent,
    DownloadButtonComponent,
    TitlePagesComponent
  ]
})
export class ComponentsModule { }
