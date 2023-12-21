import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CmpDataTableComponent } from '../../components/cmp-data-table/cmp-data-table.component';
import { CmpDataTablePageComponent } from '../../components/cmp-data-table-page/cmp-data-table-page.component';
import { CmpDataTableSortComponent } from '../../components/cmp-data-table-sort/cmp-data-table-sort.component';
import { CmpDataTableDragComponent } from '../../components/cmp-data-table-drag/cmp-data-table-drag.component';
import { CmpDataTableLoopComponent } from '../../components/cmp-data-table-loop/cmp-data-table-loop.component';
import { CmpDataTableColLoopComponent } from '../../components/cmp-data-table-col-loop/cmp-data-table-col-loop.component';
import { CmpDataTableFilterComponent } from '../../components/cmp-data-table-filter/cmp-data-table-filter.component';
import { CmpTableSearchComponent } from '../../components/cmp-table-search/cmp-table-search.component';

/**
 * @title Tables Page. Page Wrapper, conditionally displays all table variants
 */

@Component({
  selector: 'app-page-tables',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    CmpDataTableComponent,
    CmpDataTablePageComponent,
    CmpDataTableSortComponent,
    CmpDataTableFilterComponent,
    CmpDataTableDragComponent,
    CmpDataTableLoopComponent,
    CmpDataTableColLoopComponent,
    CmpTableSearchComponent
    ],
  template: `
    <div>
      <h2 class="page-title">Items ({{id }})</h2>
      <p>
        This into text also tests parameters. '{{id}}' is the :id passed through from the url or path. The 'routerDataParam' is '{{routerDataParam}}'. While the 'queryParam' is '{{queryParam}}'. '{{routerResolverData}}' is the router resolver data.
      </p>

      <ng-container *ngIf="(id ==='search' || id ==='filter' || id ==='all')">
        <p>This is shown on search, filter or all</p>
      </ng-container>

      <ng-container *ngIf="(id === 'filter-form' || id === 'all')">
        <p>This is shown on filter Form</p>
        
      </ng-container>

      <ng-container *ngIf="(id === 'filter-form' || id === 'all')">
        <p>This is shown on search, filter or all</p>
        <div class="table-meta-header">
          <div class="side-a">
            <button mat-raised-button color="primary">BUTTON</button>
          </div>
          <div class="side-b">
            <app-cmp-table-search></app-cmp-table-search>
          </div>
        </div>
      </ng-container>

      <ng-container *ngIf="(id==='search' || id==='filter' || id === 'filter-form' || id==='all')">
        <h2>Filter Table</h2>
        <app-cmp-data-table-filter [linkItem]="true" [showSearch]="true" />
      </ng-container>

      <ng-container *ngIf="(routerDataParam==='default' || id==='all')">
        <h2>Default Table</h2>
        <app-cmp-data-table />
      </ng-container>

      <ng-container *ngIf="(id==='loop'|| id==='all')">
        <h2>Looping Table</h2>
        <app-cmp-data-table-loop />
      </ng-container>

      <ng-container *ngIf="(id==='page'|| id==='all')">
        <h2>Pagination Table</h2>
        <app-cmp-data-table-page />
      </ng-container>

      <ng-container *ngIf="(id==='sort'|| id==='all')">
        <h2>Sort Table</h2>
        <app-cmp-data-table-sort />
      </ng-container>

      <ng-container *ngIf="(id==='drag'|| id==='all')">
        <h2>Drag and Drop Columns Table</h2>
        <app-cmp-data-table-drag />
      </ng-container>

      <ng-container *ngIf="(id==='col-loop'|| id==='all')">
        <h2>Looping column ex Table</h2>
        <app-cmp-data-table-col-loop />
      </ng-container>


    </div>
`,
  styleUrl: './page-tables.component.scss'
})

export class PageTablesComponent {
  // old and busted
  // constructor(private activatedRoute:ActivatedRoute ) {
  //   const id = this.activatedRoute.snapshot.params['id'];
  // }
  private router = Inject(Router);
  private route = Inject(ActivatedRoute);

  //new hotness
  @Input() id!: string | undefined;
  @Input() queryParam!: string;
  @Input() routerDataParam!: string;
  @Input() routerResolverData!: string;

}
