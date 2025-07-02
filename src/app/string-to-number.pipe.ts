import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToNumber'
})
export class StringToNumberPipe implements PipeTransform {
  transform(value: string | null): number {

    const parsedValue = Number(value);
    
    return parsedValue;
  }
}