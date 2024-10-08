import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ScrollTopModule } from 'primeng/scrolltop';

@NgModule({
  exports: [
    ButtonModule,
    ScrollTopModule,
    RippleModule
  ]
})
export class PrimeNgModule { }
