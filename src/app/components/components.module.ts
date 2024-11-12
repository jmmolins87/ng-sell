import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';


import { AntdGradientComponent } from './animations/antd-gradient/antd-gradient.component';
import { AntdLinesComponent } from './animations/antd-lines/antd-lines.component';
import { AntdTypewriterComponent } from './animations/antd-typewriter/antd-typewriter.component';
import { TabsComponent } from './tabs/tabs.component';
import { TitlePagesComponent } from './title-pages/title-pages.component';
import { ToolComponent } from './tool/tool.component';
import { WrapChartComponent } from './wrap-chart/wrap-chart.component';
import { WrapImgsComponent } from './wrap-imgs/wrap-imgs.component';




@NgModule({
  declarations: [
    AntdGradientComponent,
    AntdLinesComponent,
    AntdTypewriterComponent,
    TabsComponent,
    TitlePagesComponent,
    ToolComponent,
    WrapChartComponent,
    WrapImgsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimeNgModule,
    TranslateModule
],
  exports: [
    AntdGradientComponent,
    AntdLinesComponent,
    AntdTypewriterComponent,
    TabsComponent,
    TitlePagesComponent,
    ToolComponent,
    WrapChartComponent,
    WrapImgsComponent
  ]
})
export class ComponentsModule { }
