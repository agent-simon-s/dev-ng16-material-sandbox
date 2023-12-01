import { Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageTablesComponent } from './pages/page-tables/page-tables.component';
import { PageMatTableComponent } from './pages/page-mat-table/page-mat-table.component';
import { CmpHotStepperComponent } from './components/cmp-hot-stepper/cmp-hot-stepper.component';

export const routes: Routes = [
	{ path: 'home', component: PageHomeComponent, title: 'A17 & Material Testbed' },
	{ path: 'tables/:id',
		component: PageTablesComponent,
		title: 'Tables with Params',
		data: {
			role: 'supercala'
		},
		resolve:{
			routerResolverData: () => 'hello from the future'
		}
	},
	// { path: 'tables', component: PageTablesComponent, pathMatch: 'full', title: 'Tables'
	// 	children: [
	//       {
	//         path: 'data', // child route path
	//         component: PageTablesComponent, // child route
	//         title: 'Tables: data driven'
	//       },
	//       {
	//         path: 'sort',
	//         component: PageTablesComponent,
	//         title: 'Tables: dynamically data driven'
	//       },
	//       {
	//         path: 'header',
	//         component: PageTablesComponent,
	//         title: 'Tables: With Header'
	//       },
	//       {
	//         path: 'paged',
	//         component: PageTablesComponent,
	//         title: 'Tables: With paged'
	//       },
	//       {
	//         path: 'search',
	//         component: PageTablesComponent,
	//         title: 'Tables: Searchable'
	//       },
	//       {
	//         path: 'buttons',
	//         component: PageTablesComponent,
	//         title: 'Tables: Buttons'
	//       },
	//       {
	//         path: 'linked',
	//         component: PageTablesComponent,
	//         title: 'Tables: linked'
	//       },
	//       {
	//         path: 'resize',
	//         component: PageTablesComponent,
	//         title: 'Tables: resize'
	//       },
	//     ],
    // },
	{ path: 'other', component: PageTablesComponent, title: 'foo' },
	{ path: 'header', component: PageTablesComponent, title: 'foo' },
	{ path: 'search', component: PageTablesComponent, title: 'foo' },
	{ path: 'prototype', component: PageMatTableComponent, title: 'foo' },
	{ path: 'hot-stepper', component: CmpHotStepperComponent, title: 'foo' },
	{ path: '', component: PageHomeComponent, title: 'A17 & Material Testbed' },
	{ path: '**', component: PageHomeComponent, title: '404' }
 ];


