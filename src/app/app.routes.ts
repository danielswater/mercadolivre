import { RouterModule, Routes } from '@angular/router';
import { NavSearchComponent } from './navsearch-component/navsearch.component';
import { SearchComponent } from './search-component/search.component';
import { DetailsComponent } from './details-component/details.component';

const app_routes: Routes = [
	{ path: '', component: SearchComponent },
	{ path: 'items', component: SearchComponent },
	{ path: 'items/:id', component: DetailsComponent }
	
];

export const AppRoutes = RouterModule.forRoot(app_routes);