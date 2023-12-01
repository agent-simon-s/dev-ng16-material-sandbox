import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import { MerchandiseInfo, MERCHANT_DATA } from "../../data/items_data";

@Component({
  selector: 'app-cmp-data-table-page',
  standalone: true,
    imports: [CommonModule, MatPaginatorModule, MatTableModule],
  templateUrl: './cmp-data-table-page.component.html',
  styleUrl: './cmp-data-table-page.component.scss'
})
export class CmpDataTablePageComponent implements AfterViewInit {
  displayedColumns: string[] = ['sku', 'name', 'price', 'cost'];
  dataSource = new MatTableDataSource(MERCHANT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
