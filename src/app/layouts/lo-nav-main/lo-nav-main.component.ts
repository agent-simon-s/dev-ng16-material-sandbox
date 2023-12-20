import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../app.routes';


@Component({
  selector: 'app-lo-nav-main',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="left-side">
      <h1><a routerLink="/home" routerLinkActive="active" ariaCurrentWhenActive="page">HOME</a></h1>
      <nav>
        <ul>
          <li><a routerLink="/mat-table" routerLinkActive="active" ariaCurrentWhenActive="page">MAT TABLE DEF</a></li>
          <li><a routerLink="/mat-table/working" routerLinkActive="active" ariaCurrentWhenActive="page">MAT TABLE WORKING</a></li>
          <li><hr /></li>
          <li><a routerLink="/tables" routerLinkActive="active" ariaCurrentWhenActive="page">TABLES <em>&#x2713;&#x2713;&#x2713;</em></a></li>
          <li> - <a routerLink="/tables/page" routerLinkActive="active" ariaCurrentWhenActive="page">PAGING <em>&#x2713;</em></a></li>
          <li> - <a routerLink="/tables/sort" routerLinkActive="active" ariaCurrentWhenActive="page">SORT TABLE <em>&#x2713;</em></a></li>
          <li> - <a routerLink="/tables/filter" routerLinkActive="active" ariaCurrentWhenActive="page">FILTERABLE <em>&#x2713;</em></a></li>
          <li> - <a routerLink="/tables/filter" routerLinkActive="active" ariaCurrentWhenActive="page">FILTER FORM <em>&#x2713;</em></a></li>
          <li> - <a routerLink="/tables/drag" routerLinkActive="active" ariaCurrentWhenActive="page">DRAGABLE <em>&#x2713;</em></a></li>
          <li> - <a routerLink="/tables/link" routerLinkActive="active" ariaCurrentWhenActive="page">LINKABLE _</a></li>
          <li> - <a routerLink="/tables/data" routerLinkActive="active" ariaCurrentWhenActive="page">DATA DRIVEN</a></li>
          <li> - <a routerLink="/tables/header" routerLinkActive="active" ariaCurrentWhenActive="page">With HEADER __</a></li>
          <li> - <a routerLink="/tables/buttons" routerLinkActive="active" ariaCurrentWhenActive="page">With BUTTONS __</a></li>
          <li> - <a routerLink="/tables/sink" routerLinkActive="active" ariaCurrentWhenActive="page">With KITCHEN SINK __</a></li>
          <li> - <a routerLink="/tables/sink" routerLinkActive="active" ariaCurrentWhenActive="page">adding all</a></li>
          <li> - <a routerLink="/tables/all" routerLinkActive="active" ariaCurrentWhenActive="page">ALL</a></li>
          <li><hr /></li>
          <li><a routerLink="/hot-stepper" routerLinkActive="active" ariaCurrentWhenActive="page">HOT STEPPER</a></li>
        </ul>
      </nav>
    </div>
  `,
  styleUrl: './lo-nav-main.component.scss'
})
export class LoNavMainComponent {
  //@Output() isActiveChange: EventEmitter<boolean>;
}
