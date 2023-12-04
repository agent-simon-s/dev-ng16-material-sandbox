import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import { MerchandiseInfo, MERCHANT_DATA } from "../../data/items_data";

/**
 * @title Table looping columns, with pagination
 *  with pagination
 *  with drag and drop columns
 */

@Component({
  selector: 'app-cmp-data-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, CdkDropList, CdkDrag, MatPaginatorModule],
  templateUrl: './cmp-data-table.component.html',
  styleUrl: './cmp-data-table.component.scss'
})
export class CmpDataTableComponent {

  // col as for loop
  columns = [
    {
      columnDef: 'sku',
      header: 'No.',
      cell: (merch: MerchandiseInfo) => `${merch.sku}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (merch: MerchandiseInfo) => `${merch.name}`,
    },
    {
      columnDef: 'cost',
      header: 'cost',
      cell: (merch: MerchandiseInfo) => `${merch.cost}`,
    },
    {
      columnDef: 'price',
      header: 'price',
      cell: (merch: MerchandiseInfo) => `${merch.price}`,
    },
    {
      columnDef: 'brand',
      header: 'brand',
      cell: (merch: MerchandiseInfo) => `${merch.brand}`,
    },
    {
      columnDef: 'department',
      header: 'department',
      cell: (merch: MerchandiseInfo) => `${merch.department}`,
    },
    {
      columnDef: 'status',
      header: 'status',
      cell: (merch: MerchandiseInfo) => `${merch.status}`,
    },
  ];
  dataSource = new MatTableDataSource<MerchandiseInfo>(MERCHANT_DATA);
  displayedColumns = this.columns.map(c => c.columnDef);

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


