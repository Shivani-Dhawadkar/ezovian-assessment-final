import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPercentFormat]'
})
export class PercentFormatDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let inputValue = inputElement.value;

    // Remove all non-digit characters
    inputValue = inputValue.replace(/\D/g, '');

    // Add a percent symbol after entering two digits
    if(inputValue.length <= 2){
      inputValue = inputValue
    }else{
      inputValue = inputValue.slice(0, 2)
    }
    // if (inputValue.length >= 2) {
      
    // }

    // Update the input field value
    inputElement.value = inputValue + '%'
  }
}

