import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class='center'>
      <img src="https://png.pngtree.com/element_our/png/20181008/star-logo-design-png_123799.jpg"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/stars" class="waves-effect waves-teal btn-flat">
        Retourner à l'accueil
      </a>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {

}
