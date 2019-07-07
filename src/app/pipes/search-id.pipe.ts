import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchID'
})
export class SearchIDPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) { return null; }
    if (!args) { return value; }

    args = args.toLowerCase();
    return value.filter(function (item) {
      return item.id == args ? true : false;
    });
  }

}
