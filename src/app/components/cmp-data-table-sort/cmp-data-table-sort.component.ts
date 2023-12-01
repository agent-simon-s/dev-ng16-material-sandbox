import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSort, Sort, MatSortModule } from "@angular/material/sort";
import { MERCHANT_DATA } from "../../data/items_data";

@Component({
  selector: 'app-cmp-data-table-sort',
  styleUrl: './cmp-data-table-sort.component.scss',
  templateUrl: './cmp-data-table-sort.component.html',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, MatTableModule, MatSortModule],
})

export class CmpDataTableSortComponent implements AfterViewInit {
  displayedColumns: string[] = ['sku', 'name', 'price', 'cost', 'brand', 'department', 'status'];
  dataSource = new MatTableDataSource(MERCHANT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort)sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
