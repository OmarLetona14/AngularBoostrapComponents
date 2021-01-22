import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryName'
})
export class CountryNamePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const results = [];
    if(arg==''){return value}
    for (const country of value){
      console.log(`Country: ${country.name}`);
      if ( country.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        results.push(country);
      }
    }
    return results;
  }

} 
