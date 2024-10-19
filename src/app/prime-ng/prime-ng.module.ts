import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RippleModule } from 'primeng/ripple';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    ChartModule,
    PanelMenuModule, // TODO: in about page
    RippleModule,
    ScrollTopModule,
    SkeletonModule,
    TagModule,
    ToastModule,
    TooltipModule
  ]
})
export class PrimeNgModule { }
