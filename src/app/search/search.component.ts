import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MercadolivreService } from './../service/mercadolivre.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  private search: string;
  private items: any[];
  
  constructor(private router: Router, private MLService: MercadolivreService) { }
  
  ngOnInit() {
    let urlParse = this.router.parseUrl(this.router.url);
    this.search = urlParse.queryParams.search;
    this.searchItem();
  }

  public searchItem(){
    if(typeof this.search === 'undefined'){
      return;
    }
    this.MLService.getItemsSearch(this.search).subscribe(items => {
      this.items = items;
    })
  }
  
}
