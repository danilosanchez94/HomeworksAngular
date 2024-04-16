import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercasecustom',
})
export class UppercasecustomPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }
}
