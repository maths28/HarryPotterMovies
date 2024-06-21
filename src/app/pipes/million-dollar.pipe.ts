import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millionDollar',
  standalone: true
})
export class MillionDollarPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length == 0) return '';
    return `$${value} million`;
  }

}
