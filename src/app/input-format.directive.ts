import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[input-format]'
})
export class InputFormatDirective {

  @Input('input-format') format = 'upperCase';
  constructor(private el: ElementRef) { }

  //@HostListener("focus")
  //onFocus(){
  //  console.log("on Focus");
  //}

  @HostListener('blur')
  onBlur() {
    console.log('on Blur :: ' + this.el.nativeElement.value);
    const value: string = this.el.nativeElement.value;

    if (this.format == 'lowerCase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }

  }

}
