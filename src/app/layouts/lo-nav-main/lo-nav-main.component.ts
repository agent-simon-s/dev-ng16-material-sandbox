import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-lo-nav-main',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="left-side">
      <h1><a routerLink="/home" routerLinkActive="active" ariaCurrentWhenActive="page">HOME</a></h1>
      <nav>
        <ul>
          <li><a routerLink="/tables" routerLinkActive="active" ariaCurrentWhenActive="page">TABLES</a></li>
          <li><a routerLink="/tables/data" routerLinkActive="active" ariaCurrentWhenActive="page">DATA TABLE</a></li>
          <li><a routerLink="/tables/page" routerLinkActive="active" ariaCurrentWhenActive="page">PAGING TABLE</a></li>
          <li><a routerLink="/tables/sort" routerLinkActive="active" ariaCurrentWhenActive="page">SORT TABLE</a></li>
          <li><a routerLink="/tables/link" routerLinkActive="active" ariaCurrentWhenActive="page">LINK TABLE</a></li>
          <li><a routerLink="/tables/search" routerLinkActive="active" ariaCurrentWhenActive="page">SEARCH TABLE</a></li>
          <li><a routerLink="/tables/header" routerLinkActive="active" ariaCurrentWhenActive="page">HEADER TABLE</a></li>
          <li><a routerLink="/tables/buttons" routerLinkActive="active" ariaCurrentWhenActive="page">BUTTONS TABLE</a></li>
          <li><a routerLink="/tables/sink" routerLinkActive="active" ariaCurrentWhenActive="page">SINK TABLE</a></li>
          <li><a routerLink="/hot-stepper" routerLinkActive="active" ariaCurrentWhenActive="page">HOT STEPPER</a></li>
        </ul>
      </nav>
    </div>
  `,
  styleUrl: './lo-nav-main.component.scss'
})
export class LoNavMainComponent {

}
