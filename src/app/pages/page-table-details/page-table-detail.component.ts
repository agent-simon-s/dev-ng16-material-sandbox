import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

/**
 * @title page for linking for details
 */

@Component({
  selector: 'app-page-tables',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    ],
  template: `
    <div>
      <h2 class="page-title">Table Detail: ({{id }})</h2>
      <p>
        This into text also tests parameters. '{{id}}' is the :id passed through from the url or path. The 'routerDataParam' is '{{routerDataParam}}'. While the 'queryParam' is '{{queryParam}}'. '{{routerResolverData}}' is the router resolver data.
      </p>

            <ng-container *ngIf="(id==='search' || id==='filter' || id==='all')">
              <p>This is shown on search, filter or all</p>
            </ng-container>

            <ng-container *ngIf="(id==='col-loop'|| id==='all')">
              <h2>Looping column ex Table</h2>
              
            </ng-container>


          </div>
`,
  styleUrl: './page-table-detail.component.scss'
})

export class PageTableDetailComponent {
  // old and busted
  // constructor(private activatedRoute:ActivatedRoute ) {
  //   const id = this.activatedRoute.snapshot.params['id'];
  // }

  //new hotness
  @Input() id!: string | undefined;
  @Input() queryParam!: string;
  @Input() routerDataParam!: string;
  @Input() routerResolverData!: string;

}
