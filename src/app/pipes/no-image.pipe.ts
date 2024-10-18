import { Pipe, PipeTransform } from '@angular/core';

import { Tool } from '../interfaces/tool.interface';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {
  
  transform(value: string, fallback: string = 'assets/img/no-image.png'): string {
    return value ? value : fallback;
  }

}
