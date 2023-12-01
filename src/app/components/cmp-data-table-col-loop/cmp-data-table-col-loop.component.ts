import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from "@angular/material/table";
import { MerchandiseInfo, MERCHANT_DATA } from "../../data/items_data";

@Component({
  selector: 'app-cmp-data-table-col-loop',
  styleUrl: './cmp-data-table-col-loop.component.scss',
  templateUrl: './cmp-data-table-col-loop.component.html',
  standalone: true,
  imports: [CommonModule,MatTableModule],
})
export class CmpDataTableColLoopComponent {

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
}
