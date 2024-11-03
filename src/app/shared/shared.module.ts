import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { CookiesBannerComponent } from './components/cookies-banner/cookies-banner.component';
import { DownloadCvComponent } from './components/download-cv/download-cv.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { WrapLogoComponent } from './components/wrap-logo/wrap-logo.component';



@NgModule({
  declarations: [
    CookiesBannerComponent,
    DownloadCvComponent,
    FooterComponent,
    NavBarComponent,
    WrapLogoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    HttpClientModule,
    PrimeNgModule
  ],
  exports: [
    CookiesBannerComponent,
    DownloadCvComponent,
    FooterComponent,
    NavBarComponent,
  ]
})
export class SharedModule { }
