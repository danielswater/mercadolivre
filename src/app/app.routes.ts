import { RouterModule, Routes } from '@angular/router';
import { NavSearchComponent } from './navsearch/navsearch.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';

const app_routes: Routes = [
	{ path: '', component: SearchComponent },
	{ path: 'items', component: SearchComponent },
	{ path: 'items/:id', component: DetailsComponent }
	
];

export const AppRoutes = RouterModule.forRoot(app_routes);