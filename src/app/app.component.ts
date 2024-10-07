import { 
  Component, 
  EventEmitter, 
  Output 
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isDarkTheme: boolean = false;

  // Change mode dark to light
  toggleDarkMode() {
    this.isDarkTheme = !this.isDarkTheme;
    if ( this.isDarkTheme ) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
  
}
