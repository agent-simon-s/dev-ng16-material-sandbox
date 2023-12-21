import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CmpTableSearchComponent } from '../../components/cmp-table-search/cmp-table-search.component';
import { CmpDataTableCloneComponent } from '../../components/cmp-data-table-clone/cmp-data-table-clone.component';

/**
 * @title Page for Clone Table. Page Wrapper,  displays clone table
 */

@Component({
  selector: 'app-pg-table-clone',
  standalone: true,
  imports: [
    CommonModule, 
    CmpTableSearchComponent,
    CmpDataTableCloneComponent
    ],
  template: `
    <div>
      <h2 class="page-title">This is Clone table</h2>
      <p>
        This into text also tests parameters. '{{id}}' is the :id passed through from the url or path. The 'routerDataParam' is '{{routerDataParam}}'. While the 'queryParam' is '{{queryParam}}'. '{{routerResolverData}}' is the router resolver data.
      </p>

      <ng-container *ngIf="(true)">
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

      <ng-container *ngIf="(true)">
        <h2>Clone Table</h2>
        <app-cmp-data-table-clone></app-cmp-data-table-clone>
      </ng-container>
    </div>
`,
  styleUrl: './pg-table-clone.component.scss'
})
export class PgTableCloneComponent {

  private router = Inject(Router);
  private route = Inject(ActivatedRoute);

  //new hotness
  @Input() id!: string | undefined;
  @Input() queryParam!: string;
  @Input() routerDataParam!: string;
  @Input() routerResolverData!: string;

}
