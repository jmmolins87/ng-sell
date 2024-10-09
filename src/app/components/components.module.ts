import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { CardComponent } from './card/card.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    CardComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    CardComponent
  ]
})
export class ComponentsModule { }
