import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    if (!value) {
      return '0min';
    }

    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    let result = '';
    if (hours > 0) {
      result += `${hours}h`;
    }
    if (minutes > 0) {
      result += ` ${minutes}min`;
    }

    return result.trim();
  }
}
