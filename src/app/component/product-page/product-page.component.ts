import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { formatPrice } from 'src/app/utils/helpers';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{
  products:any={};
  formatPrices = formatPrice;
  constructor (public api: ApiService, private router:Router){}

  onBuy(product: any) {
    console.log(product);
    localStorage.setItem('PRODUCT', JSON.stringify(product));
    this.router.navigate(['buy-page'], {
      queryParams: { page: 1 },
    });
  }
  ngOnInit(): void {
    this.api.products().subscribe(
      (data:any) => {
        console.log(data);
        this.products = data.results;
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
