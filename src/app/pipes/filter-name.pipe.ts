import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterByName'
})
export class FilterNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value
    }
    const newVal: any = [];
    _.each(value, (item) => {;
      if (item.title.toLowerCase().indexOf(args.toLowerCase()) !== -1) {
        newVal.push(item);
      }
    });
    return newVal;
  }

}
