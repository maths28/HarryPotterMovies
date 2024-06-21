import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatStrings',
  standalone: true
})
export class ConcatStringsPipe implements PipeTransform {

  transform(value: string[], separator: string = ' '): string {
    if (!Array.isArray(value)) {
      return value;
    }
    return value.join(separator);
  }

}
