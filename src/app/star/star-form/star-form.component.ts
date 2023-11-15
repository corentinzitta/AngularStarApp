import { Component, Input, OnInit } from '@angular/core';
import { StarService } from '../star.service';
import { Star } from '../star';
import { Router } from '@angular/router';

@Component({
  selector: 'app-star-form',
  templateUrl: './star-form.component.html',
  styleUrls: ['./star-form.component.css']
})
export class StarFormComponent {
  @Input() star: Star;

  types: string[];
  isAddForm: boolean;
  
  constructor(
    private starService: StarService,
    private router: Router
  ){}

  ngOnInit(){
    this.types = this.starService.getStarTypeList();
    this.isAddForm = this.router.url.includes('add');
  }

  hasType(type: string): boolean {
    return this.star.types.includes(type);
  }

  selectType($event: Event, type: string): void {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked) {
      this.star.types.push(type);
    }
    else {
      const index = this.star.types.indexOf(type);
      this.star.types.splice(index, 1);
    }
  }

  isTypesValid(type: string): boolean {
    if(this.star.types.length == 1 && this.hasType(type)){
      return false;
    }

    if(this.star.types.length > 2 && !this.hasType(type)){
      return false;
    }

    return true;
  }

  onSubmit(){
    if(this.isAddForm)
    {
      this.starService.addStar(this.star).subscribe((star: Star) => this.router.navigate(['/star/', star.id]));
    }
    else 
    {
      this.starService.updateStar(this.star).subscribe(() => this.router.navigate(['/star/', this.star.id]));
    }
    
  }

}
