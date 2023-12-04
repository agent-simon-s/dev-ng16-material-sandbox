import { AfterViewInit, Component, ViewChild}  from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MerchandiseInfo, MERCHANT_DATA } from "../../data/items_data";

/**
 * @title Data table with re-orderable columns.
 */

@Component({
  selector: 'app-cmp-data-table-drag',
  standalone: true,
    imports: [CommonModule, MatTableModule, CdkDropList, CdkDrag, MatPaginatorModule],
  templateUrl: './cmp-data-table-drag.component.html',
  styleUrl: './cmp-data-table-drag.component.scss'
})


export class CmpDataTableDragComponent implements AfterViewInit {

  displayedColumns: string[] = ['sku', 'name', 'price', 'cost'];
  dataSource = new MatTableDataSource(MERCHANT_DATA);

  // @ViewChild(MatPaginator) paginator!: MatPaginator;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    console.log("view intitt'd");
  }
}
