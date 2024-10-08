import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

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
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: loaderTranslatorJson,
        deps: [ HttpClient ]
      }
    }),
    PrimeNgModule,
    SharedModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
