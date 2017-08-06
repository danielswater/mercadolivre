import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MercadolivreService {

  private URL = 'api/items/';

  constructor(private http: Http) { }

  //Exibe os detalhes da busca
  getItemsSearch(search: string) {
    return this.http.get(this.URL+search)
      .map(res => res.json())
  }

  //Faz a busca pelo ID do produto
  getItem(id: string){
    return this.http.get(this.URL+id+'/description')
    .map(res => res.json())
  }

}
