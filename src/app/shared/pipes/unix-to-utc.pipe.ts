import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixToUtc',
})
export class UnixToUtcPipe implements PipeTransform {

  transform(unix: number): string {
    return new Date(unix * 1000).toString()
  }
}
