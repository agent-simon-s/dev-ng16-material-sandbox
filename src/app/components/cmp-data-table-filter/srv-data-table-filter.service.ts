import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//import { MerchandiseInfo, MERCHANT_DATA } from "../../data/items_data";
import { SpiritInfo, SPIRITS_DATA } from "../../data/firewater_data";

@Injectable({
    providedIn: 'root'
})

export class DataTableFilterService {
  // private search$ = new BehaviorSubject<string[]>([]);

  //protected myDataStore: string = "This is may data string";
  protected spiritItemsListData: SpiritInfo[] = SPIRITS_DATA; 

  showSibling = new Subject<boolean>();

  constructor() { }

  myTestGetMethod(){
    // return this.myDataStore;
    console.log("myTestGetMethod")
  }

  myOtherTestGetMethod(value:String):any {
    return console.log("My OtherTestGetMethod Value is", value)
  }

  getAllSpiritItems() : SpiritInfo[] {
    return this.spiritItemsListData;
  }

  getSpiritItembyId(id:number) : SpiritInfo | undefined {
    return this.spiritItemsListData.find( spiritItem => spiritItem.sku === id );
  }
}
