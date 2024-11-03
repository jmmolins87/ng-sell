import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';


import { AntdGradientComponent } from './animations/antd-gradient/antd-gradient.component';
import { AntdLinesComponent } from './animations/antd-lines/antd-lines.component';
import { SkillComponent } from './skill/skill.component';
import { TabsComponent } from './tabs/tabs.component';
import { TitlePagesComponent } from './title-pages/title-pages.component';
import { ToolComponent } from './tool/tool.component';
import { WrapChartComponent } from './wrap-chart/wrap-chart.component';
import { WrapImgsComponent } from './wrap-imgs/wrap-imgs.component';
import { AntdMatrixTextComponent } from './animations/antd-matrix-text/antd-matrix-text.component';




@NgModule({
  declarations: [
    AntdGradientComponent,
    AntdLinesComponent,
    SkillComponent,
    TabsComponent,
    TitlePagesComponent,
    ToolComponent,
    WrapChartComponent,
    WrapImgsComponent,
    AntdMatrixTextComponent,
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
    SkillComponent,
    TabsComponent,
    TitlePagesComponent,
    ToolComponent,
    WrapChartComponent,
    WrapImgsComponent,
    AntdMatrixTextComponent
  ]
})
export class ComponentsModule { }
