import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Star } from '../star';
import { StarService } from '../star.service';

@Component({
  selector: 'app-detail-star',
  templateUrl: './detail-star.component.html',
  styles: [
  ]
})
export class DetailStarComponent implements OnInit{

  starList: Star[]
  starRequested: Star | undefined

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private starService: StarService
  ) { }

  ngOnInit(): void {
    const starId: string | null = this.route.snapshot.paramMap.get('id')

    if(starId) {
      this.starService.getStarByID(+starId).subscribe(star => this.starRequested = star);
    }
    
  }

  deleteStar(star: Star) {
    this.starService.deleteStarById(star.id).subscribe(() => this.goToStarList());
  }

  goToStarList(){
    this.router.navigate(['/stars'])
  }

  goToEditStar(star: Star){
    this.router.navigate(['/edit/star/', star.id])
  }

}
