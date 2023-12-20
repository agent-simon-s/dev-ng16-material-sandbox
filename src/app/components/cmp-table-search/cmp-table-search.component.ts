import { OnInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MerchandiseInfo, MERCHANT_DATA } from "../../data/items_data";


@Component({
  selector: 'app-cmp-table-search',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule ],
  templateUrl: './cmp-table-search.component.html',
  styleUrl: './cmp-table-search.component.scss'
})

export class CmpTableSearchComponent implements OnInit {
  //dataSource = new MatTableDataSource(MERCHANT_DATA);
  thisArrayOne: string  = "fuck this is bullshit";
  thisArrayTwo: string  = "";
  ngOnInit() {
    console.log('init search');
    console.log(this.thisArrayOne);
  }

  satelliteFilter(fkey:string) {
    console.log('satelliteFilter', fkey);
    if (!fkey) this.thisArrayTwo = this.thisArrayOne;
    //this.thisArrayTwo = this.thisArrayOne.filter(fkey);
    this.thisArrayTwo = this.thisArrayOne.replace(/bullshit/gi,fkey );

    //this.thisArrayTwo = fkey;
    // if (!fkey) this.thisArrayTwo = this.thisArrayOne;
    // console.log('satelliteFilter', fkey);
    // this.thisArrayTwo = this.thisArrayOne.filter(
    //   // foo = foo.includes(fkey.toLoerCase())
    // )
    console.log(this.thisArrayTwo);
  }
}
