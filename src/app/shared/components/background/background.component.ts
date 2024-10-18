import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  public colors: string[] = [
    '#FF6B6B', // Light red
    '#F8D210', // Yellow
    '#6BCB77', // Light green
    '#4D96FF', // Light blue
    '#835AFD'  // Purple
  ];
  public currentColorIndex: number = 0;
  public nextColorIndex: number = 1;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    this.colors[this.currentColorIndex] = `rgb(${Math.floor(255 * x)}, ${Math.floor(255 * y)}, 150)`;
  }

  ngOnInit(): void {
    this.startBackgroundTransition();
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

}
