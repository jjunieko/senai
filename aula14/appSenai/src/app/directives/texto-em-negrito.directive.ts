import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextoEmNegrito]'
})
export class TextoEmNegritoDirective {

  constructor(private elemento: ElementRef) {
    elemento.nativeElement.style.fontWeight = "bold";

    // console.log(elemento);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.elemento.nativeElement.style.backgroundColor = color;
  }
  color: string;

}
