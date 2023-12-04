import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { CmpMatTablePrototypeDataSource, CmpMatTablePrototypeItem } from './cmp-mat-table-prototype-datasource';

@Component({
  selector: 'app-cmp-mat-table-prototype',
  templateUrl: './cmp-mat-table-prototype.component.html',
  styleUrls: ['./cmp-mat-table-prototype.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule]
})
export class CmpMatTablePrototypeComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CmpMatTablePrototypeItem>;
  dataSource = new CmpMatTablePrototypeDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
