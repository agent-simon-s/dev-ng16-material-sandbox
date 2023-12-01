import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MerchandiseInfo, MERCHANT_DATA} from "../../data/items_data";

/**
 * @title Table with sorting
 */

@Component({
    selector: 'app-cmp-data-table',
    standalone: true,
    imports: [MatTableModule, MatSortModule, MatPaginatorModule],
    templateUrl: './cmp-data-table.component.html',
    styleUrl: './cmp-data-table.component.scss'
})
export class CmpDataTableComponent implements AfterViewInit {
    displayedColumns: string[] = ['sku', 'name', 'price', 'cost', 'brand', 'department', 'status'];
    dataSource = new MatTableDataSource(MERCHANT_DATA);

    constructor(private _liveAnnouncer: LiveAnnouncer) {}

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort)sort!: MatSort;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
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





/** =========================== */















import { Component, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {MerchandiseInfo, MERCHANT_DATA} from "../../data/items_data";


@Component({
    selector: 'app-cmp-data-table',
    standalone: true,
    imports: [CommonModule, MatTableModule],
    templateUrl: './cmp-data-table.component.html',
    styleUrl: './cmp-data-table.component.scss'
})

export class CmpDataTableComponent  {
    Sorting
    columns: string[] = ['sku', 'name', 'price', 'cost', 'brand', 'department', 'status'];
    dataSource = new MatTableDataSource(MERCHANT_DATA);

    @ViewChild(MatSort, {static: true}) sort: MatSort;

    ngOnInit() {
        this.dataSource.sort = this.sort;
    }

    @Input() MerchandiseInfo!:MerchandiseInfo;

    paginator
    displayedColumns: string[] = ['sku', 'name', 'price', 'cost', 'brand', 'department', 'status'];
    dataSource = new MatTableDataSource<MerchandiseInfo>(MERCHANT_DATA);

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }

    // col as for loop
    // columns = [
    //   {
    //     columnDef: 'sku',
    //     header: 'No.',
    //     cell: (merch: MerchandiseInfo) => `${merch.sku}`,
    //   },
    //   {
    //     columnDef: 'name',
    //     header: 'Name',
    //     cell: (merch: MerchandiseInfo) => `${merch.name}`,
    //   },
    //   {
    //     columnDef: 'cost',
    //     header: 'cost',
    //     cell: (merch: MerchandiseInfo) => `${merch.cost}`,
    //   },
    //   {
    //     columnDef: 'price',
    //     header: 'price',
    //     cell: (merch: MerchandiseInfo) => `${merch.price}`,
    //   },
    //   {
    //     columnDef: 'brand',
    //     header: 'brand',
    //     cell: (merch: MerchandiseInfo) => `${merch.brand}`,
    //   },
    //   {
    //     columnDef: 'department',
    //     header: 'department',
    //     cell: (merch: MerchandiseInfo) => `${merch.department}`,
    //   },
    //   {
    //     columnDef: 'status',
    //     header: 'status',
    //     cell: (merch: MerchandiseInfo) => `${merch.status}`,
    //   },
    // ];
    // dataSource = MERCHANT_DATA;
    // displayedColumns = this.columns.map(c => c.columnDef);
}





