import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WrapperImgsComponent } from './components/wrapper-imgs/wrapper-imgs.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    WrapperImgsComponent
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
    WrapperImgsComponent
  ]
})
export class SharedModule { }
