import { Component, OnInit } from '@angular/core';
import { Star } from '../star';
import { Router } from '@angular/router';
import { StarService } from '../star.service';

@Component({
  selector: 'app-list-star',
  templateUrl: './list-star.component.html',
  styles: [
  ]
})
export class ListStarComponent implements OnInit{

  listOfStars: Star[];

  constructor(
    private router: Router,
    private starService: StarService
  ){}

  ngOnInit(){
    this.starService.getStarList().subscribe(listOfStars => this.listOfStars = listOfStars);
  }

  goToStar(star : Star){
    this.router.navigate(['/star/' + star.id])
  }

}
