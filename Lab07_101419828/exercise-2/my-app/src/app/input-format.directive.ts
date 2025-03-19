import { Directive, HostListener, ElementRef } from '@angular/core';


@Directive({
  selector: '[inputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    console.log('Blur event triggered');
    const inputValue = this.el.nativeElement.value;
    this.el.nativeElement.value = inputValue.toUpperCase();
  }
  
}
