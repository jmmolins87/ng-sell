import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BackgroundGradientComponent } from './backgrounds/background-gradient/background-gradient.component';
import { BackgroundLinesComponent } from './backgrounds/background-lines/background-lines.component';
import { DownloadButtonComponent } from './download-button/download-button.component';
import { SkillComponent } from './skill/skill.component';
import { TabsComponent } from './tabs/tabs.component';
import { TitlePagesComponent } from './title-pages/title-pages.component';
import { ToolComponent } from './tool/tool.component';
import { WrapChartComponent } from './wrap-chart/wrap-chart.component';
import { WrapImgsComponent } from './wrap-imgs/wrap-imgs.component';




@NgModule({
  declarations: [
    BackgroundGradientComponent,
    BackgroundLinesComponent,
    DownloadButtonComponent,
    SkillComponent,
    TabsComponent,
    TitlePagesComponent,
    ToolComponent,
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
    BackgroundGradientComponent,
    BackgroundLinesComponent,
    DownloadButtonComponent,
    TabsComponent,
    TitlePagesComponent,
    ToolComponent,
    WrapChartComponent,
    WrapImgsComponent,
  ]
})
export class ComponentsModule { }
