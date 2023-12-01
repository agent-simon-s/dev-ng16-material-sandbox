import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CmpDataTableComponent } from '../../components/cmp-data-table/cmp-data-table.component';
import { CmpDataTablePageComponent } from '../../components/cmp-data-table-page/cmp-data-table-page.component';
import { CmpDataTableSortComponent } from '../../components/cmp-data-table-sort/cmp-data-table-sort.component';
import { CmpDataTableFilterComponent } from '../../components/cmp-data-table-filter/cmp-data-table-filter.component';
import { CmpDataTableLoopComponent } from '../../components/cmp-data-table-loop/cmp-data-table-loop.component';
import { CmpDataTableColLoopComponent } from '../../components/cmp-data-table-col-loop/cmp-data-table-col-loop.component';

/**
 * @title Table with columns defined using a for loop instead of statically written in the template.
 */

@Component({
  selector: 'app-page-tables',
  standalone: true,
  imports: [
    CommonModule, 
    MatTableModule, 
    MatButtonModule, 
    CmpDataTableComponent, 
    CmpDataTablePageComponent, 
    CmpDataTableSortComponent, 
    CmpDataTableFilterComponent, 
    CmpDataTableLoopComponent,
    CmpDataTableColLoopComponent  
    ],
  template: `
    <div>
      <h2 class="page-title">Items ({{id}})</h2>
      <p>
        This into text also tests parameters. '{{id}}' is the :id passed through from the url or path. The 'routerDataParam' is '{{routerDataParam}}'. While the 'queryParam' is '{{queryParam}}'. '{{routerResolverData}}' is the router resolver data.
      </p>
      <div class="table-meta-header">
        <div class="side-a">
          <button mat-raised-button color="primary">Primary</button>
        </div>
        <div class="side-b">
          <form>
            <button mat-button color="primary">SEARCH</button><input>
          </form>
        </div>
      </div>

     <ng-container *ngIf="(routerDataParam==='default' || id==='all')">
        <h2>Default Table</h2>
        <app-cmp-data-table /> 
      </ng-container>

      <ng-container *ngIf="(id==='sort'|| id==='all')">
        <h2>Sort Table</h2>
        <app-cmp-data-table-sort /> 
      </ng-container>

      <ng-container *ngIf="(id==='page'|| id==='all')">
        <h2>Pagination Table</h2>
        <app-cmp-data-table-page />
      </ng-container>

      <ng-container *ngIf="(id==='loop'|| id==='all')">
        <h2>Looping column Table</h2>
        <app-cmp-data-table-loop />
      </ng-container>

      <ng-container *ngIf="(id==='col-loop'|| id==='all')">
        <h2>Looping column Table</h2>
        <app-cmp-data-table-col-loop />
      </ng-container>

      <ng-container *ngIf="(id==='sort'|| id==='all')">
        <h2>Sort Table</h2>
        <app-cmp-data-table-sort /> 
      </ng-container>

      <ng-container *ngIf="(id==='search' || id==='filter' || id==='all')">
        <h2>Search Table</h2>
        <app-cmp-data-table-filter />
      </ng-container>

    </div>
    <br>
  `,
  styleUrl: './page-tables.component.scss'
})

export class PageTablesComponent {
  // old and busted
  // constructor(private activatedRoute:ActivatedRoute ) {
  //   const id = this.activatedRoute.snapshot.params['id'];
  // }

  //new hotness
  @Input() id!: string;
  @Input() queryParam!: string;
  @Input() routerDataParam!: string;
  @Input() routerResolverData!: string;

}
