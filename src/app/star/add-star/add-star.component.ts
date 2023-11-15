import { Component } from '@angular/core';
import { Star } from '../star';

@Component({
  selector: 'app-add-star',
  template: `
    <h2 class="center">Ajouter une star </h2>
    <app-star-form [star]="star"></app-star-form>`,
})
export class AddStarComponent {
  star: Star;

  ngOnInit(){
    this.star = new Star();
  }
}
