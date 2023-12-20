import { Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageTablesComponent } from './pages/page-tables/page-tables.component';
import { PageMatTableComponent } from './pages/page-mat-table/page-mat-table.component';
import { CmpHotStepperComponent } from './components/cmp-hot-stepper/cmp-hot-stepper.component';

export const routes: Routes = [
	{ path: 'home', component: PageHomeComponent, title: 'A17 & Material Testbed' },
	{ path: 'tables',
		pathMatch: 'full',
		component: PageTablesComponent,
		title: 'Tables with Params',
		data: {
			routerDataParam: 'default'
		},
		resolve:{
			routerResolverData: () => 'hello from the future'
		}
	},
	{ path: 'tables/:id',
		component: PageTablesComponent,
		title: 'Tables with Params',
		data: {
			routerDataParam: 'examples'
		},
		resolve:{
			routerResolverData: () => 'hello from the future'
		}
	},
	{ path: 'mat-table',
		pathMatch: 'full',
		component: PageMatTableComponent,
		title: 'Default schema Table',
		data: {
			routerDataParam: 'material'
		},
		resolve:{
			routerResolverData: () => 'hello from the future'
		}
	},
	{ path: 'mat-table/:id',
		component: PageMatTableComponent,
		title: 'Table with Params',
		data: {
			routerDataParam: 'supercala'
		},
		resolve:{
			routerResolverData: () => 'hello from the future'
		}
	},
	{ path: 'other', component: PageTablesComponent, title: 'foo' },
	{ path: 'header', component: PageTablesComponent, title: 'foo' },
	{ path: 'search', component: PageTablesComponent, title: 'foo' },
	{ path: 'prototype', component: PageMatTableComponent, title: 'foo' },
	{ path: 'hot-stepper', component: CmpHotStepperComponent, title: 'foo' },
	{ path: '', component: PageHomeComponent, title: 'A17 & Material Testbed' },
	{ path: '**', component: PageHomeComponent, title: '404' }
 ];


