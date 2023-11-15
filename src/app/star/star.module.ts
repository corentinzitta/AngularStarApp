import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStarComponent } from './list-star/list-star.component';
import { DetailStarComponent } from './detail-star/detail-star.component';
import { BorderCardDirective } from './border-card.directive';
import { StarTypeColorPipe } from './star-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { StarService } from './star.service';
import { FormsModule } from '@angular/forms';
import { StarFormComponent } from './star-form/star-form.component';
import { EditStarComponent } from './edit-star/edit-star.component';
import { AddStarComponent } from './add-star/add-star.component';
import { SearchStarComponent } from './search-star/search-star.component';
import { LoaderComponent } from './loader/loader.component'
import { authGuard } from '../auth.guard';

const starRoutes: Routes = [
  {path: 'edit/star/:id', component: EditStarComponent, canActivate: [authGuard]},
  {path: 'star/add', component: AddStarComponent, canActivate: [authGuard]},
  {path: 'stars', component: ListStarComponent, canActivate: [authGuard]},
  {path: 'star/:id', component: DetailStarComponent, canActivate: [authGuard]}
];

@NgModule({
  declarations: [
    ListStarComponent,
    DetailStarComponent,
    BorderCardDirective,
    StarTypeColorPipe,
    StarFormComponent,
    EditStarComponent,
    AddStarComponent,
    SearchStarComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(starRoutes)
  ],
  providers: [StarService]
})
export class StarModule { }
