import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MerchandiseInfo, MERCHANT_DATA} from "../../data/items_data";

/**
 * @title Table with pagination
 */

@Component({
  selector: 'app-cmp-data-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './cmp-data-table.component.html',
  styleUrl: './cmp-data-table.component.scss'
})
export class CmpDataTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['sku', 'name', 'price', 'cost'];
  dataSource = new MatTableDataSource(MERCHANT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


