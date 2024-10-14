import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    RippleModule,
    ScrollTopModule,
    SkeletonModule,
    ToastModule,
  ]
})
export class PrimeNgModule { }
