import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'hideNotShop'
})
export class HideNotShopPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    const newVal: any = [];
    _.each(value, (item) => {
      if (item.shopList && item.shopList === true) {
        newVal.push(item);
      }
    });

    return newVal;

  }

}
