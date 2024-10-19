import { Component, ElementRef, OnInit, AfterViewInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-background-lines',
  templateUrl: './background-lines.component.html',
  styleUrls: ['./background-lines.component.scss']
})
export class BackgroundLinesComponent implements OnInit, AfterViewInit {
  @ViewChild('grayscaleCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private shapes: any[] = [];
  private maxShapes = 5;           // Max number of shapes at any time
  private speed = 0.0015;          // Very slow drawing speed
  private canvasWidth!: number;
  private canvasHeight!: number;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initializeCanvas();
    this.animate();  // Start the animation loop
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.initializeCanvas();
  }

  // Initialize canvas dimensions and get the drawing context
  initializeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    this.ctx = canvas.getContext('2d')!;
    this.canvasWidth = rect.width;
    this.canvasHeight = rect.height;
  }

  // Generate random lines, curves, or shapes (rectangles, circles)
  generateRandomShape(): any {
    const shapeType = Math.random();

    if (shapeType < 0.25) {
      // Straight line
      return {
        type: 'line',
        startX: Math.random() * this.canvasWidth,
        startY: Math.random() * this.canvasHeight,
        endX: Math.random() * this.canvasWidth,
        endY: Math.random() * this.canvasHeight,
        progress: 0,
        opacity: 0,
        strokeStyle: this.getRandomGrayscale()
      };
    } else if (shapeType < 0.5) {
      // Quadratic curve
      return {
        type: 'quadratic',
        startX: Math.random() * this.canvasWidth,
        startY: Math.random() * this.canvasHeight,
        cpX: Math.random() * this.canvasWidth,
        cpY: Math.random() * this.canvasHeight,
        endX: Math.random() * this.canvasWidth,
        endY: Math.random() * this.canvasHeight,
        progress: 0,
        opacity: 0,
        strokeStyle: this.getRandomGrayscale()
      };
    } else if (shapeType < 0.75) {
      // Cubic Bézier curve
      return {
        type: 'cubic',
        startX: Math.random() * this.canvasWidth,
        startY: Math.random() * this.canvasHeight,
        cp1X: Math.random() * this.canvasWidth,
        cp1Y: Math.random() * this.canvasHeight,
        cp2X: Math.random() * this.canvasWidth,
        cp2Y: Math.random() * this.canvasHeight,
        endX: Math.random() * this.canvasWidth,
        endY: Math.random() * this.canvasHeight,
        progress: 0,
        opacity: 0,
        strokeStyle: this.getRandomGrayscale()
      };
    } else {
      // Random shape (circle or rectangle)
      const isCircle = Math.random() < 0.5;
      return isCircle
        ? {
            type: 'circle',
            centerX: Math.random() * this.canvasWidth,
            centerY: Math.random() * this.canvasHeight,
            radius: Math.random() * (this.canvasWidth / 10), // Circle size relative to canvas
            progress: 0,
            opacity: 0,
            strokeStyle: this.getRandomGrayscale()
          }
        : {
            type: 'rect',
            x: Math.random() * this.canvasWidth,
            y: Math.random() * this.canvasHeight,
            width: Math.random() * (this.canvasWidth / 5),
            height: Math.random() * (this.canvasHeight / 5),
            progress: 0,
            opacity: 0,
            strokeStyle: this.getRandomGrayscale()
          };
    }
  }

  // Get a random grayscale color
  getRandomGrayscale(): string {
    const grayValue = Math.floor(Math.random() * 256); // Random grayscale value (0-255)
    return `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
  }

  // Main animation loop
  animate(): void {
    const ctx = this.ctx;
    const canvas = this.canvasRef.nativeElement;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Add new shapes if fewer than maxShapes
    if (this.shapes.length < this.maxShapes) {
      this.shapes.push(this.generateRandomShape());
    }

    // Draw each shape and update its progress
    this.shapes.forEach((shape, index) => {
      shape.progress += this.speed; // Very slow progress
      shape.opacity = Math.min(shape.opacity + this.speed, 1); // Gradually increase opacity

      this.drawShape(ctx, shape); // Draw shape based on its progress

      // Remove shape once it's fully drawn and faded out
      if (shape.progress >= 1 && shape.opacity <= 0) {
        this.shapes.splice(index, 1);
      }
    });

    // Request the next frame
    requestAnimationFrame(() => this.animate());
  }

  // Draw a shape (straight line, quadratic curve, cubic curve, circle, rectangle)
  drawShape(ctx: CanvasRenderingContext2D, shape: any): void {
    ctx.save();
    ctx.globalAlpha = shape.opacity; // Apply opacity
    ctx.strokeStyle = shape.strokeStyle;
    ctx.lineWidth = 1.5;
    ctx.beginPath();

    if (shape.type === 'line') {
      // Straight line
      const currentX = shape.startX + (shape.endX - shape.startX) * shape.progress;
      const currentY = shape.startY + (shape.endY - shape.startY) * shape.progress;
      ctx.moveTo(shape.startX, shape.startY);
      ctx.lineTo(currentX, currentY);

    } else if (shape.type === 'quadratic') {
      // Quadratic Bézier curve
      const currentX = shape.startX + (shape.endX - shape.startX) * shape.progress;
      const currentY = shape.startY + (shape.endY - shape.startY) * shape.progress;
      ctx.moveTo(shape.startX, shape.startY);
      ctx.quadraticCurveTo(shape.cpX, shape.cpY, currentX, currentY);

    } else if (shape.type === 'cubic') {
      // Cubic Bézier curve
      const currentX = shape.startX + (shape.endX - shape.startX) * shape.progress;
      const currentY = shape.startY + (shape.endY - shape.startY) * shape.progress;
      ctx.moveTo(shape.startX, shape.startY);
      ctx.bezierCurveTo(
        shape.cp1X, shape.cp1Y,
        shape.cp2X, shape.cp2Y,
        currentX, currentY
      );

    } else if (shape.type === 'circle') {
      // Circle (draw progressively)
      ctx.arc(shape.centerX, shape.centerY, shape.radius * shape.progress, 0, Math.PI * 2);
    
    } else if (shape.type === 'rect') {
      // Rectangle (draw progressively)
      ctx.rect(
        shape.x, shape.y,
        shape.width * shape.progress, shape.height * shape.progress
      );
    }

    ctx.stroke();
    ctx.restore();

    // Fade out the shape after it is fully drawn
    if (shape.progress >= 1) {
      shape.opacity = Math.max(shape.opacity - this.speed, 0); // Gradually decrease opacity
    }
  }
}