import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute} from '@angular/router';
import { MercadolivreService } from './../service/mercadolivre.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  id: string;
  subscription: any;
  item: any;

  constructor(private route: ActivatedRoute, private MLService: MercadolivreService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(param => {
      this.id = param['id'];
      console.log(this.id)
    })
    this.getItemDetails();
  }

  public getItemDetails(){
    this.MLService.getItem(this.id).subscribe(item => {
      this.item = item;
      console.log(this.item);
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
