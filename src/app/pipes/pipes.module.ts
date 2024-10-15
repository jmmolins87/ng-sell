import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateToolPipe } from './translate-tool.pipe';


@NgModule({
  declarations: [
    TranslateToolPipe
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    TranslateToolPipe
  ]
})
export class PipesModule { }
