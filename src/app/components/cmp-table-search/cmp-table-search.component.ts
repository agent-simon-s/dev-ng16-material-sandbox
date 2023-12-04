import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-cmp-table-search',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule ],
  templateUrl: './cmp-table-search.component.html',
  styleUrl: './cmp-table-search.component.scss'
})
export class CmpTableSearchComponent {
  applyFilter(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    console.log('foo');

    const filterTableValue = (event.target as HTMLInputElement).value;
  }
}
