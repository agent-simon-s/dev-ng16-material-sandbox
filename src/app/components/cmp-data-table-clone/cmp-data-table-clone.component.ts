import { Component, AfterViewInit, Input, ViewChild } from "@angular/core";
import { MatTableModule, MatTable } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSortModule, MatSort } from "@angular/material/sort";
import { MatPaginatorModule, MatPaginator } from "@angular/material/paginator";
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  moveItemInArray,
} from "@angular/cdk/drag-drop";
import {
  CustomMatGridDataSource,
  CustomMatGridItem,
} from "./cmp-data-table-clone-data.service";

@Component({
  selector: 'app-cmp-data-table-clone',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule],
  templateUrl: './cmp-data-table-clone.component.html',
  styleUrl: './cmp-data-table-clone.component.scss'
})
export class CmpDataTableCloneComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CustomMatGridItem>;

  @Input() updateGridData: string = "";
  @Input() url: string = "";
  @Input() filterDataUrl: string = "";
  @Input() showSearch: boolean = true;
  // @Input() gridStructure: any[] = [];
  // @Input() gridStructure: string = "";
  // @Input() rowsheight = 50;
  // @Input() statusbarheight = 60;
  // @Input() pagermode: any = "default";
  @Input() pageindex: number = 1;
  @Input() pagesize: number | undefined = undefined;
  @Input() pagesizeoptions = [5, 10, 20];
  @Input() pageable = true;
  @Input() sortable = true;
  @Input() linkItem = true;
  @Input() linkBrand = false;
  @Input() linkActions = true;
  @Input() columnsToDisplay: any[] = [ 
    "sku",
    "name",
    "brand",
    "stock",
    "cost",
    "price",
    "status",
    "modate",
    "action",
  ];
  @Input() columnsSelected: any[] = [];

  dataSource = new CustomMatGridDataSource();


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    "sku",
    "name",
    "brand",
    "stock",
    "cost",
    "price",
    "status",
    "modate",
    "action",
  ];

  myClickMethod(id: string): void {
    console.log(id);
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}

