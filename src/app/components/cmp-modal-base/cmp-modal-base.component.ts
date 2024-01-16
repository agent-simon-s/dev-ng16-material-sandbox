import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';


export interface DialogData {
  search: string;
  stub: string;
}

@Component({
  selector: 'app-cmp-modal-base',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, FormsModule, MatFormFieldModule, MatRadioModule, MatInputModule ],
  templateUrl: './cmp-modal-base.component.html',
  styleUrl: './cmp-modal-base.component.scss'
})

export class CmpModalBaseComponent {

  // empty string placeholder for selected radio
  searchType: string = "";

  // array of radio values/names
  searches: string[] = ['vendor catalog', 'most common', 'most recent', 'create a new item'];

  // object for radio button values and names
  lookUpMethods: any[] = [
    { val: 'catalog', name: 'Add from Vendor Catalog'},
    { val: 'common', name: 'Add from Most Common'},
    { val: 'recent', name: 'Add from Most Recent'},
    { val: 'new', name: 'Create a new Item'}
  ]

  // constructor ( public dialogRef: MatDialogRef<CmpModalBaseComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}



  // constructor ( public dialogRef: MatDialogRef<CmpModalBaseComponent>) {}

  // constructor ( public dialogRef: MatDialogRef<CmpModalBaseComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  // onNoClick(): void {
  //   this.dialogRef.close(this.searchType);
  // }

  // dialogRef.afterClosed().subscribe(result => {
  //   console.log('dialog is closed');
  //   console.log(`Dialog result: ${result}`);
  // });

