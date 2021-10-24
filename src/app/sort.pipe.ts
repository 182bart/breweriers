import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string>): Array<string>{

    return value.sort((a, b)=>{
      if(a > b){
        return 1;
      } else{
        return-1;
      }
    })
  }


}
