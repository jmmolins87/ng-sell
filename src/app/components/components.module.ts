import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    CardComponent
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
