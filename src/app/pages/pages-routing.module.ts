import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ToolsPageComponent } from './tools-page/tools-page.component';
import { ToolPageComponent } from './tool-page/tool-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'tools',
    component: ToolsPageComponent
  },
  {
    path: 'tool/:id',
    component: ToolPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
