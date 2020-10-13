import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, local: boolean = false): any {

    if (!img)
      return '../assets/images/no-img.jpg';
    if (local)
      return '../assets/images/' + img;
  }

}
