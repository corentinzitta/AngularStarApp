import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

import { Star } from '../star';
import { StarService } from '../star.service';

@Component({
  selector: 'app-search-star',
  templateUrl: './search-star.component.html',
})
export class SearchStarComponent {
  searchTerms = new Subject<string>(); // Les subject sont à la fois Observable et Observateur : ils peuvent partager une source observable avec plusieurs observateurs
  stars$: Observable<Star[]>; //Stocke le résultat de la recherche de star. Les observables émettent des événements (interceptés par des Observateurs)

  constructor(
    private router: Router,
    private starService: StarService
  ) {}

  //Exécuté à l'initialisation du composant. stars$ y est ici configuré pour changer de valeur en fonction des changements de searchTerms
  ngOnInit(): void {
    this.stars$ = this.searchTerms.pipe(
      debounceTime(300), //Pour effectuer des recherches seulement tous les 300ms
      distinctUntilChanged(), //Attendre qu'il y ait un changement dans le champ de recherche
      switchMap((term) => this.starService.searchStarList(term))
    );
  }

  search(term: string){
    this.searchTerms.next(term) //met à jour (emet un nouvel évenement) searchTerms
  }

  goToDetail(star: Star){
    const link = ['/star', star.id];
    this.router.navigate(link)
  }

}
