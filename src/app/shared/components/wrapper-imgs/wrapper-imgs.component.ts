import { Component, Input } from '@angular/core';

import { WrapperImg } from './interface/wrapperImg.interface';

@Component({
  selector: 'app-wrapper-imgs',
  templateUrl: './wrapper-imgs.component.html',
  styleUrls: ['./wrapper-imgs.component.scss']
})
export class WrapperImgsComponent {

  @Input()
  public navbarData!: WrapperImg;

}
