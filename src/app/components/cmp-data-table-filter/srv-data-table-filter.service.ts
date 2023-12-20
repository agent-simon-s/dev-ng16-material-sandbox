import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//import { MerchandiseInfo, MERCHANT_DATA } from "../../data/items_data";

@Injectable()
export class DataTableFilterService {
  protected myDataStore: string = "This is may data string";

  showSibling = new Subject<boolean>();

  constructor() { }

  myGetMethod(){
    return this.myDataStore;
  }

  myOtherGetMethod(value:String):any {
    return console.log("My Value is", value)
  }
}
