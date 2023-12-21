import { DataSource } from "@angular/cdk/collections";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { map } from "rxjs/operators";
import { Observable, of as observableOf, merge } from "rxjs";

// TODO: Replace this with your own data model type
export interface CustomMatGridItem {
  sku: number;
  name: string;
  brand: string;
  department: string;
  stock: number;
  cost: number;
  price: number;
  modate: string;
  status: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: CustomMatGridItem[] = [
  {
    sku: 11111111,
    name: "Willett Bourbon 750ml",
    brand: "Willett",
    department: "Spirits",
    stock: 1,
    cost: 70.99,
    price: 76.99,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 11111112,
    name: "Willett Rye Whiskey 750ml",
    brand: "Willett",
    department: "Spirits",
    stock: 1,
    cost: 70.99,
    price: 76.99,
    status: "Back Ordered",
    modate: "Yesterday",
  },
  {
    sku: 89422,
    name: "Makers Mark Bourbon  750ml",
    brand: "Makers Mark ",
    department: "Spirits",
    stock: 1,
    cost: 19.99,
    price: 23.99,
    status: "Not for sale",
    modate: "Yesterday",
  },
  {
    sku: 51580,
    name: "Basil Hayden 750ml",
    brand: "Beam",
    department: "Spirits",
    stock: 1,
    cost: 76.99,
    price: 99.99,
    modate: "Not for individual sale",
    status: "Active",
  },
  {
    sku: 51588,
    name: "Basil Hayden 10y  750ml",
    brand: "Beam",
    department: "Spirits",
    stock: 1,
    cost: 80.014,
    price: 93.99,
    modate: "Jan 10, 2016",
    status: "-",
  },
  {
    sku: 51583,
    name: "Basil Hayden Dark Rye 750ml",
    brand: "Beam",
    department: "Spirits",
    stock: 1,
    cost: 76.99,
    price: 99.99,
    modate: "Yesterday",
    status: "Active",
  },
  {
    sku: 11672,
    name: "Jim Beam",
    brand: "Beam",
    department: "Spirits",
    stock: 1,
    cost: 10.00,
    price: 20.492,
    modate: "Yesterday",
    status: "Not for Sale",
  },
  {
    sku: 116728,
    name: "Jim Beam 1.75L",
    brand: "Beam",
    department: "Spirits",
    stock: 1,
    cost: 13.99,
    price: 35.99,
    status: "Active",
    modate: "Today",
  },
  {
    sku: 41575,
    name: "Jack Daniels",
    brand: "Beam",
    department: "Spirits",
    stock: 1,
    cost: 19.99,
    price: 20.99,
    status: "-",
    modate: "Yesterday",
  },
  {
    sku: 601575,
    name: "Bulleit",
    brand: "Bulleit",
    department: "Spirits",
    stock: 1,
    cost: 19.99,
    price: 30.99,
    modate: "Yesterday",
    status: "-",
  },
  {
    sku: 28046312,
    name: "Woodford",
    brand: "Woodford",
    department: "Spirits",
    stock: 1,
    cost: 19.99,
    price: 10.811,
    modate: "Yesterday",
    status: "Active",
  },
  {
    sku: 96025071,
    name: "Highland Park 12",
    brand: "Highland Park",
    department: "Spirits",
    stock: 1,
    cost: 50.99,
    price: 85.99,
    modate: "Yesterday",
    status: "Active",
  },
  {
    sku: 859486042,
    name: "Whistle Pig",
    brand: "Whistle Pig",
    department: "Spirits",
    stock: 1,
    cost: 50.99,
    price: 66.0067,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 52146128,
    name: "Quita Ruban",
    brand: "Glenmorangie",
    department: "Spirits",
    stock: 1,
    cost: 69.99,
    price: 81.99,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 38001985,
    name: "Laphroaig 10 750ml",
    brand: "Laphroaig",
    department: "Spirits",
    stock: 1,
    cost: 56.99,
    price: 66.99,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 998800,
    name: "Bookers Bourbon",
    brand: "Beam",
    department: "Spirits",
    stock: 1,
    cost: 19.99,
    price: 20.1797,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 55778899,
    name: "Hudson 750ml",
    brand: "Hudson",
    department: "Spirits",
    stock: 1,
    cost: 19.99,
    price: 6.941,
    status: "Back Ordered",
    modate: "Aug 26 2012",
  },
  {
    sku: 10099,
    name: "Bulleit 750ml",
    brand: "Bulleit",
    department: "Spirits",
    stock: 1,
    cost: 19.99,
    price: 30.99,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 1230001,
    name: "Woodford 750ml",
    department: "Spirits",
    brand: "Woodford",
    stock: 1,
    cost: 19.99,
    price: 10.811,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 39299111,
    name: "Knob Creek 750ml",
    brand: "Beam",
    department: "Spirits",
    stock: 1,
    cost: 19.99,
    price: 23.99,
    status: "-",
    modate: "Yesterday",
  },
  {
    sku: 85484752,
    name: "Bakers 750ml",
    brand: "Beam",
    department: "Spirits",
    stock: 1,
    cost: 19.99,
    price: 71.99,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 52816188,
    name: "Buffalo Trace",
    brand: "Buffalo Trace",
    department: "Spirits",
    stock: 1,
    cost: 38.89,
    price: 38.89,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 13719895,
    name: "Rowan's Creek 12",
    brand: "Rowan",
    department: "Spirits",
    stock: 1,
    cost: 43.99,
    price: 50.9984,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 99880099,
    name: "Aberloure 16 ",
    brand: "Ne",
    department: "Spirits",
    stock: 1,
    cost: 89.1399,
    price: 101.99,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 19912008,
    name: "Evan Williams",
    brand: "Williams",
    department: "Spirits",
    stock: 1,
    cost: 19.89,
    price: 27.99,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 19911996,
    name: "Bulleit",
    brand: "Bulleit",
    department: "Spirits",
    stock: 1,
    cost: 19.99,
    price: 30.99,
    modate: "Yesterday",
    status: "Active",
  },
  {
    sku: 2123138,
    name: "Woodford",
    brand: "Woodford",
    department: "Spirits",
    stock: 1,
    cost: 19.99,
    price: 29.99,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 57587507,
    name: "Knob Creek",
    brand: "Beam",
    department: "Spirits",
    stock: 1,
    cost: 19.99,
    price: 23.99,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 85948353,
    name: "Four Roses Single Barrel",
    brand: "Four Roses",
    department: "Spirits",
    stock: 1,
    cost: 23.99,
    price: 54.99,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 85948377,
    name: "Four Roses Small Batch",
    brand: "Four Roses",
    department: "Spirits",
    stock: 1,
    cost: 43.99,
    price: 64.99,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 52855778,
    name: "Old Forester",
    brand: "Forester",
    department: "Spirits",
    stock: 1,
    cost: 18.99,
    price: 26.99,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 38045895,
    name: "Glenlivet",
    price: 30.99,
    department: "Spirits",
    stock: 1,
    cost: 20.99,
    brand: "F",
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 56790800,
    name: "Macallan 18Y Double Cask",
    brand: "Macallan",
    department: "Spirits",
    stock: 1,
    cost: 299.99,
    price: 419.99,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 19912008,
    name: "Rittenhouse Rye Whiskey 750ml",
    brand: "Rittenhouse",
    department: "Spirits",
    stock: 1,
    cost: 19.99,
    price: 36.941,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 19911996,
    name: "The Balvedine",
    brand: "Balvedine",
    department: "Spirits",
    stock: 1,
    cost: 60.99,
    price: 71.992,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 2123139,
    name: "Woodford Rye",
    brand: "Woodford",
    department: "Spirits",
    stock: 1,
    cost: 19.99,
    price: 10.811,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 57587507,
    name: "Knob Creek",
    brand: "Beam",
    department: "Spirits",
    stock: 1,
    cost: 19.99,
    price: 23.99,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 85948377,
    name: "Lagavulin 16 Islay, 750 mL",
    brand: "Lagavulin",
    department: "Spirits",
    stock: 1,
    cost: 14.0067,
    price: 129.99,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 52855778,
    name: "Glenfiddich 12 Yr 750ml",
    brand: "O",
    department: "Spirits",
    stock: 1,
    cost: 36.99,
    price: 43.99,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 38045895,
    name: "Laphroaig 10 750ml",
    brand: "Laphroaig",
    department: "Spirits",
    stock: 1,
    cost: 56.99,
    price: 66.99,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 56790800,
    name: "Dickel",
    brand: "Dickel",
    department: "Spirits",
    stock: 1,
    cost: 19.99,
    price: 20.1797,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 56790800,
    name: "Jefserson's Small Batch",
    brand: "Jefserson",
    department: "Spirits",
    stock: 1,
    cost: 36.99,
    price: 44.997,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 56790800,
    name: "Bushmills  750ml",
    brand: "Bushmills",
    department: "Spirits",
    stock: 1,
    cost: 23.09,
    price: 29.97,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 6790800,
    name: "Jamison 750ml",
    department: "Spirits",
    brand: "Jamisons",
    stock: 1,
    cost: 15.99,
    price: 20.49,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 4276883,
    name: "Tillamore Dew",
    brand: "Tillamore",
    department: "Spirits",
    stock: 1,
    cost: 15.99,
    price: 33.99,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 6790528,
    name: "Teeling Dew",
    brand: "Teeling",
    department: "Spirits",
    stock: 1,
    cost: 55.99,
    price: 66.99,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 170790528,
    name: "Ardbeg 10",
    brand: "Ardbeg",
    department: "Spirits",
    stock: 1,
    cost: 55.99,
    price: 81.99,
    status: "Active",
    modate: "Yesterday",
  },
  {
    sku: 230790528,
    name: "Glenfiddich 15 Yr 750ml",
    brand: "Glenfiddich",
    department: "Spirits",
    stock: 1,
    cost: 55.99,
    price: 74.99,
    status: "Not For Sale",
    modate: "Yesterday",
  },
];

/**
 * Data source for the CmpMatTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class CustomMatGridDataSource extends DataSource<CustomMatGridItem> {
  data: CustomMatGridItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<CustomMatGridItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(
        observableOf(this.data),
        this.paginator.page,
        this.sort.sortChange,
      ).pipe(
        map(() => {
          return this.getPagedData(this.getSortedData([...this.data]));
        }),
      );
    } else {
      throw Error(
        "Please set the paginator and sort on the data source before connecting.",
      );
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: CustomMatGridItem[]): CustomMatGridItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }


  /**
   * Filter the data
   * 
   */
  // private getFilteredData(term, data: CustomMatGridItem[]): CustomMatGridItem[] {
  //   const filterValue = (term);
  //   if (this.paginator) {
  //     console.log("filter data")
  //     return this.data.filter = filterValue.trim().toLowerCase();;
  //   } else {
  //     console.log("serve data")
  //     return data;
  //   }
  // }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: CustomMatGridItem[]): CustomMatGridItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === "") {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === "asc";
      switch (this.sort?.active) {
        case "name": return compare(a.name, b.name, isAsc);
        case "sku": return compare(+a.sku, +b.sku, isAsc);
        case "brand": return compare(+a.brand, +b.brand, isAsc);
        case "stock": return compare(+a.stock, +b.stock, isAsc);
        case "cost": return compare(+a.cost, +b.cost, isAsc);
        case "price": return compare(+a.price, +b.price, isAsc);
        case "status": return compare(+a.status, +b.status, isAsc);
        case "modate": return compare(+a.modate, +b.modate, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for client-side sorting. */
function compare(
  a: string | number,
  b: string | number,
  isAsc: boolean,
): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
