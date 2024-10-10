import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PagesRoutingModule } from './pages-routing.module';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ComponentsModule } from '../components/components.module';

import { ToolsComponent } from './tools/tools.component';
import { ToolComponent } from './tool/tool.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    ToolsComponent,
    ToolComponent,
    HomeComponent,
    ErrorComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TranslateModule,
    PrimeNgModule,
    ComponentsModule
  ]
})
export class PagesModule { }
