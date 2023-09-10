import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Directive({
  selector: '[appPercentFormat]'
})
export class PercentFormatDirective {
  private inputSubject = new Subject<string>();

  constructor(private el: ElementRef, private renderer : Renderer2) { }

  // @HostListener('input', ['$event.target.value'])
  // onInput(value: string) {
  //   const inputValue = parseFloat(value);
  //   if (!isNaN(inputValue)) {
  //     // this.el.nativeElement.value = (inputValue);
  //    if(value.length === 2){
  //     this.el.nativeElement.value = inputValue + '%' 
  //     }
  //    else {
  //     this.el.nativeElement.value.slice(0, 2) + '%'
  //   }





  // }
  // }
  // }





  @HostListener('input', ['$event.target.value']) onInput(value: string) {
  
    const numericValue = value.replace(/[^0-9]/g, '');

    
    const formattedValue = numericValue.length >= 2 ? numericValue.slice(0, 2) + '%' : numericValue;

    // Update the input field's value with the formatted value
    this.renderer.setProperty(this.el.nativeElement, 'value', formattedValue);
  }
}




  

