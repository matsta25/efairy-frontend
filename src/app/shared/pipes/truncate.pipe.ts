import { Pipe, PipeTransform } from '@angular/core'

// https://stackoverflow.com/a/46455994/10133542

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit = 25, completeWords = false, ellipsis = '...') {
    if (completeWords) {
      limit = value.substr(0, limit).lastIndexOf(' ')
    }
    return value.length > limit ? value.substr(0, limit) + ellipsis : value
  }

}
