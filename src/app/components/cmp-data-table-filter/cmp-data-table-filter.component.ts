import { Component, Input, Inject, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule} from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DataTableFilterService } from "./srv-data-table-filter.service";
import { SpiritInfo, SPIRITS_DATA } from "../../data/firewater_data";
/**
 * @title Data Table with filtering.
 */

@Component({
  selector: 'app-cmp-data-table-filter',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule],
  templateUrl: './cmp-data-table-filter.component.html',
  styleUrl: './cmp-data-table-filter.component.scss'
})

export class CmpDataTableFilterComponent {
  spiritItemsList: SpiritInfo[] = [];
  dataTableFilterService  = Inject(DataTableFilterService);

  // constructor() {
  //   this.spiritItemsList = this.dataTableFilterService.getAllSpiritItems();
  // }


  displayedColumns: string[] = ['sku', 'name', 'price', 'cost'];
  dataSource = new MatTableDataSource(SPIRITS_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() updateGridData: string = "";
  @Input() showSearch: boolean = true;
  @Input() pageindex: number = 3;
  @Input() pagesize: number = 6;
  @Input() pagesizeoptions = [6, 10, 20];
  @Input() pagerheight = 60;
  @Input() pageable: boolean =true;
  @Input() sortable: boolean =true;
  @Input() linkItem: boolean =true;
  @Input() linkMore: boolean =true;
  @Input() columnsSelected: any[] = [];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    //this.dataTableFilterService.myTestGetMethod();
  }

  myClickMethod(id:string): void {
    console.log(id);
  }
}
