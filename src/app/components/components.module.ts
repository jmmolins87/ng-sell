import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { CardComponent } from './card/card.component';
import { TitlePagesComponent } from './title-pages/title-pages.component';



@NgModule({
  declarations: [
    CardComponent,
    TitlePagesComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    TranslateModule
  ],
  exports: [
    CardComponent,
    TitlePagesComponent
  ]
})
export class ComponentsModule { }
