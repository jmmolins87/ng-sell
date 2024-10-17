import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSkeletonCard]'
})
export class SkeletonCardDirective implements OnChanges {

  @Input()
  public showSkeletonTitle!: boolean;

  constructor( private _el: ElementRef, private _render: Renderer2 ) { }

  ngOnChanges(): void {
    if (this.showSkeletonTitle) {
      this._render.addClass(this._el.nativeElement, 'skeleton-title');
    } else {
      this._render.removeClass(this._el.nativeElement, 'skeleton-title');
    }
  }

}
