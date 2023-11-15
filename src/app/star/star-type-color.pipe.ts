import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starTypeColor'
})
export class StarTypeColorPipe implements PipeTransform {

  transform(type: string): string {

    let color: string;

    switch(type)
    {
      case 'R&B':
        color = 'red lighten-1';
        break;
      case 'Pop':
        color = 'green lighten-1';
        break;
      case 'Hip-Hop':
        color = 'brown lighten-1';
        break;
      case 'Electro':
        color = 'blue lighten-1';
        break;
      case 'Rap':
        color = 'grey lighten-1';
        break;
      case 'Rock':
        color = 'red lighten-3';
        break;
      case 'Comedy':
        color = 'pink lighten-1';
        break;
      default:
        color = 'blue lighten-3';
    }

    return 'chip ' + color;
  }

}
