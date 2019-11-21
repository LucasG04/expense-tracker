import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'germanCosts'
})
export class GermanCostsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (typeof value == 'number') {
      value = value.toFixed(2);
      let costs = value + '';
      costs = costs.replace('.', ',');
      return costs;
    } else {
      return value;
    }
  }

}
