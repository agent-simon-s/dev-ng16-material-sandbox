import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { CmpMatTableDataSource, CmpMatTableItem } from './cmp-mat-table-datasource';

@Component({
  selector: 'app-cmp-mat-table',
  templateUrl: './cmp-mat-table.component.html',
  styleUrls: ['./cmp-mat-table.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule]
})

export class CmpMatTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CmpMatTableItem>;
  dataSource = new CmpMatTableDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
