import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { CardComponent } from './card/card.component';
import { DownloadButtonComponent } from './download-button/download-button.component';
import { TitlePagesComponent } from './title-pages/title-pages.component';
import { WrapChartComponent } from './wrap-chart/wrap-chart.component';
import { WrapImgsComponent } from './wrap-imgs/wrap-imgs.component';



@NgModule({
  declarations: [
    CardComponent,
    DownloadButtonComponent,
    TitlePagesComponent,
    WrapChartComponent,
    WrapImgsComponent,
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
    WrapChartComponent,
    WrapImgsComponent,
  ]
})
export class ComponentsModule { }
