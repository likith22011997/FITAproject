import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {
  discount = 0;
  total =  0;
  MSMEdiscount: any;
  
// value below is the price value in dependance.component.ts file 
// MSME : any is the MSME value in component.ts file
  transform(value: any, MSME: any, args?: any): any {
    // example 1
    // this.discount=((value*20)/100);
    // this.total = value-this.discount;
    // return this.total;

    // example 2
    // this.discount = (value*2);
    // return this.total = value-this.discount;

    // example 3
    this.MSMEdiscount = MSME/100;
    return this.MSMEdiscount;

  }
}
