import { Component, OnInit } from '@angular/core';
import { Star } from '../star';
import { ActivatedRoute } from '@angular/router';
import { StarService } from '../star.service';

@Component({
  selector: 'app-edit-star',
  template: `
    <h2 class="center">Editer {{star?.name}}</h2>
      <div *ngIf="star" class="col s12 m8 offset-m2">
        <div class="card horizontal hoverable">
          <div class="card-image">
            <img [src]="star.picture">
          </div>
        </div>
      </div>
    <app-star-form *ngIf="star" [star]="star"></app-star-form>
  `,
  styles: [
  ]
})
export class EditStarComponent {

  star: Star|undefined;

  constructor(
    private route: ActivatedRoute,
    private starService: StarService
  ){}

  ngOnInit() {
    const starID: string|null = this.route.snapshot.paramMap.get('id');
    if(starID){
      this.starService.getStarByID(+starID).subscribe(star => this.star = star);
    } else {
      this.star = undefined;
    }
  }

}
