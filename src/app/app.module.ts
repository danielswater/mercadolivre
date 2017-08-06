import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavSearchComponent } from './navsearch/navsearch.component';
import { MercadolivreService } from './service/mercadolivre.service';
import { AppRoutes } from './app.routes';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavSearchComponent,
    SearchComponent,
    DetailsComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes
  ],
  providers: [MercadolivreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
