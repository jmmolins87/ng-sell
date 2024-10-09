import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    RippleModule,
    SkeletonModule,
  ]
})
export class PrimeNgModule { }
