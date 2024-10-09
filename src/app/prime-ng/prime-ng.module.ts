import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  exports: [
    ButtonModule,
    ProgressSpinnerModule,
    RippleModule,
    SkeletonModule,
  ]
})
export class PrimeNgModule { }
