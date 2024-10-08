import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ToolsComponent } from './tools/tools.component';
import { ToolComponent } from './tool/tool.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


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
    PrimeNgModule
  ]
})
export class PagesModule { }
