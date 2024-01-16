import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
// import { MatIconModule } from '@angular/material/icon';
// import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CmpModalBaseComponent } from '../../components/cmp-modal-base/cmp-modal-base.component';


@Component({
  standalone: true,
  selector: 'app-page-home',
  styleUrl: './page-home.component.scss',
  templateUrl: './page-home.component.html',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})

export class PageHomeComponent {


  // placeholder for modal result
  search: string = "";
  // placeholder for data to modal
  stub: string = "";

  constructor(
    public dialog: MatDialog
  ) {}

  openDialog():void {
    const dialogRef = this.dialog.open( CmpModalBaseComponent, {
      width: '600px',
      height: '600px',
      panelClass: 'my-mat-modal-mask',
      data: { stub: 'kitkat' }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('dialog is closed');
      console.log(`Dialog result: ${result}`);
      this.search = result;
    });
  }
}

// openDialog():void {
  // const dialogRef = this.dialog.open( CmpModalBaseComponent, {
  //   width: '600px',
  //   height: '600px',
  //   panelClass: 'my-mat-modal-dialog',
  //   data: { search: this.search, stub: this.stub }
  // });

  // dialogRef.afterClosed().subscribe((result) => {
  //   console.log('dialog is closed');
  //   console.log(`Dialog result: ${result}`);
  // });
// }
// }
