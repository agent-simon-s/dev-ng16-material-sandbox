import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CmpMatTableComponent } from '../../components/cmp-mat-table/cmp-mat-table.component';

/**
 * @title Table with columns defined using a for loop instead of statically written in the template.
 */

@Component({
  selector: 'app-page-mat-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, CmpMatTableComponent  ],
  template: `
    <div>
      <h1 class="page-title">Items (Material)</h1>
      <p>
        Dolor sit amet consectetur adipisicing, elit. Sapiente consectetur atque recusandae tempora vitae eligendi voluptas harum qui placeat porro earum ex voluptate dolor suscipit error pariatur distinctio ea, omnis.
      </p>
      <div class="table-meta-header">
        <div class="side-a">
          <button mat-raised-button color="primary">Secondary</button>
        </div>
        <div class="side-b">
          <form>
            <button mat-button color="primary">SEARCH</button><input>
          </form>
        </div>
      </div>
      <h2>Default Table</h2>
      <app-cmp-mat-table></app-cmp-mat-table>
    </div>
    <br>
  `,
  styleUrl: './page-mat-table.component.scss'
})

export class PageMatTableComponent {}
