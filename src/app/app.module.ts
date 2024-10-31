import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CookieService } from 'ngx-cookie-service';

import { SharedModule } from './shared/shared.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { AppComponent } from './app.component';


export function loaderTranslatorJson( http: HttpClient ) {
  return new TranslateHttpLoader( http, './assets/i18n/', '.json' );
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: loaderTranslatorJson,
        deps: [ HttpClient ]
      }
    }),
    SharedModule,
    PrimeNgModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
