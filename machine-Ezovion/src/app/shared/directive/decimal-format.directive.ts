import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDecimalFormat]'
})
export class DecimalFormatDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let inputValue = inputElement.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    
    // Add a decimal point after the first two digits
    if (inputValue.length > 2) {
      inputValue = inputValue.substring(0, 2) + '.' + inputValue.substring(2);
    }

    // Update the input field value
    inputElement.value = inputValue;
  }
}
