import { Component, HostListener, OnInit } from '@angular/core';
import { SharedService } from './../../../shared/services/shared.service';

@Component({
  selector: 'app-background-gradient',
  templateUrl: './background-gradient.component.html',
  styleUrls: ['./background-gradient.component.scss']
})
export class BackgroundGradientComponent implements OnInit {

  // Background
  public colors: string[] = [
    '#FF6B6B', // Light red
    '#F8D210', // Yellow
    '#6BCB77', // Light green
    '#4D96FF', // Light blue
    '#835AFD'  // Purple
  ];
  // Current color index
  public currentColorIndex: number = 0;
  // Next color index
  public nextColorIndex: number = 1;
  // Dark Theme
  public isDarkMode: boolean = false;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    this.colors[this.currentColorIndex] = `rgb(${Math.floor(255 * x)}, ${Math.floor(255 * y)}, 150)`;
  }

  constructor( private _sharedService: SharedService ) {}

  ngOnInit(): void {
    // Start the background transition
    this.startBackgroundTransition();
    // Get the current route to apply the class
    this.darkMode();
  }

  startBackgroundTransition() {
    setInterval(() => {
      this.currentColorIndex = this.nextColorIndex;
      this.nextColorIndex = (this.nextColorIndex + 1) % this.colors.length;
    }, 5000); // Change background every 5 seconds
  }

  getCurrentBackground() {
    return `linear-gradient(135deg, ${this.colors[this.currentColorIndex]} 0%, ${this.colors[this.nextColorIndex]} 100%)`;
  }

  darkMode(): void {
    // Subscribe to the dark mode status to apply the class
    this._sharedService.darkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

}
