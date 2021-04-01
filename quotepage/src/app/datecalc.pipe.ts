import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datecalc'
})
export class DatecalcPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
