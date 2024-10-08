import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  // Dark Theme
  @Input()
  public darkMode: boolean = false;

  public year = new Date().getFullYear();

}
