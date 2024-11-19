import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafeImageFallbackPipe } from './safe-image-fallback/safe-image-fallback.pipe';



@NgModule({
  declarations: [
    SafeImageFallbackPipe
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    SafeImageFallbackPipe
  ]
})
export class PipesModule { }
