import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { MatSort} from '@angular/material/sort';

import { PageTablesComponent } from './pages/page-tables/page-tables.component';
import { LoHeaderMainComponent } from './layouts/lo-header-main/lo-header-main.component';
import { LoNavMainComponent } from './layouts/lo-nav-main/lo-nav-main.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ 
    CommonModule, 
    RouterLink, 
    RouterOutlet, 
    RouterLinkActive,
    MatButtonModule, 
    MatSlideToggleModule, 
    LoHeaderMainComponent, 
    LoNavMainComponent, 
    PageTablesComponent, 
    MatTableModule
  ]
})

export class AppComponent {
  title = 'dev-ng-mat-test'; 
}
 
