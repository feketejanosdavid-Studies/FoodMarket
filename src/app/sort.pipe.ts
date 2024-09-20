import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(foods:any[],irany:number): any {
    if (!foods) return null;
    if (irany==0) return foods
    return foods.sort(
      (a,b)=>Number(a.ar)-Number(b.ar)
    )
  }

}
