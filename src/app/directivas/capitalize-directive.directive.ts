import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]',
})
export class CapitalizeDirectiveDirective {
  constructor(elem: ElementRef) {
    elem.nativeElement.style.textTransform = 'uppercase';
  }
}
