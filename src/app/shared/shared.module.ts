import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WrapLogoComponent } from './components/wrap-logo/wrap-logo.component';
import { CookiesBannerComponent } from './components/cookies-banner/cookies-banner.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    WrapLogoComponent,
    CookiesBannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    HttpClientModule,
    PrimeNgModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    CookiesBannerComponent
  ]
})
export class SharedModule { }
