import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'redondeo'
})
export class RedondeoPipe implements PipeTransform {

  transform( value: number | string, ...args: String[]): string  {
     let valueF= Number(value);
       let decimal=valueF- Math.floor(valueF);
      console.log(decimal);
      if(decimal<=.49){
        return String(Math.floor(valueF)+.5)
      }else if(decimal>=.51){
       return String(Math.floor(valueF)+1)
      }
    return String(valueF);
  }

}
