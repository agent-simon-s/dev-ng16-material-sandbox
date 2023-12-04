import {Component, ViewChild} from '@angular/core';
//import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
//import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MerchandiseInfo, MERCHANT_DATA } from "../../data/items_data";


/**
 * @title Data Table with filtering.
 */

@Component({
  selector: 'app-cmp-data-table-filter',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './cmp-data-table-filter.component.html',
  styleUrl: './cmp-data-table-filter.component.scss'
})

export class CmpDataTableFilterComponent {
  displayedColumns: string[] = ['sku', 'name', 'price', 'cost'];
  dataSource = new MatTableDataSource(MERCHANT_DATA);

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;

  // constructor() {
  //   // Create 100 users
  //   const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

  //   // Assign the data to the data source for the table to render
  //   this.dataSource = new MatTableDataSource(users);
  // }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
}

// /** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }