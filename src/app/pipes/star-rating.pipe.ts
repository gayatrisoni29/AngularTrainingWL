import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating'
})
export class StarRatingPipe implements PipeTransform {

  transform(metascore: string | number ): string {
    if(metascore > 80){
       return '★★★★★';
     } if(metascore > 70){
       return '★★★★';
     } if(metascore > 60){
     return '★★★';
     } if(metascore > 50){
      return '★★';
    }
    return '★';
  }
}
