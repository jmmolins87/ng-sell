import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { PagesRoutingModule } from './pages-routing.module';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';

import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { ToolPageComponent } from './tool-page/tool-page.component';
import { ToolsPageComponent } from './tools-page/tools-page.component';


@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    ErrorPageComponent,
    HomePageComponent,
    ToolPageComponent,
    ToolsPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    PagesRoutingModule,
    TranslateModule,
    PrimeNgModule,
    SharedModule,
    ComponentsModule,
    PipesModule
  ]
})
export class PagesModule { }
