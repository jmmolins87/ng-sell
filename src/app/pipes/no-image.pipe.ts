import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {
  
  transform(value: string, fallback: string = 'assets/img/no-image.png'): string {
    return value ? value : fallback;
  }

}
