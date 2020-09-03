import { Directive, ElementRef, HostListener, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appTextoEmNegrito]'
})
export class TextoEmNegritoDirective implements OnInit {
  @Input('siglaPartido') siglaPartido: string;

  constructor(private elemento: ElementRef) {
    elemento.nativeElement.style.fontWeight = "bold";

    // console.log(elemento);
  }
  ngOnInit() {
    switch (this.siglaPartido) {
      case 'PCdoB':
        this.elemento.nativeElement.style.backgroundColor = 'blue';
        break;
      case 'NOVO':
        this.elemento.nativeElement.style.backgroundColor = 'pink';
        break;
      case 'PMB':
        this.elemento.nativeElement.style.backgroundColor = 'green';
        break;
      case 'AVANTE':
        this.elemento.nativeElement.style.backgroundColor = '#2CE656';
        break;
      case 'PATRIOTA':
        this.elemento.nativeElement.style.backgroundColor = '#30FE9A';
        break;
      case 'PCO':
        this.elemento.nativeElement.style.backgroundColor = '#30FE9A';
        break;


    }

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



}
