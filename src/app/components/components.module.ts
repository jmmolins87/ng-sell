import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { CardComponent } from './card/card.component';
import { TitlePagesComponent } from './title-pages/title-pages.component';
import { DownloadButtonComponent } from './download-button/download-button.component';
import { WrapImgsComponent } from './wrap-imgs/wrap-imgs.component';
import { WrapChartComponent } from './wrap-chart/wrap-chart.component';



@NgModule({
  declarations: [
    CardComponent,
    DownloadButtonComponent,
    TitlePagesComponent,
    WrapImgsComponent,
    WrapChartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimeNgModule,
    TranslateModule
  ],
  exports: [
    CardComponent,
    DownloadButtonComponent,
    TitlePagesComponent,
    WrapImgsComponent
  ]
})
export class ComponentsModule { }
