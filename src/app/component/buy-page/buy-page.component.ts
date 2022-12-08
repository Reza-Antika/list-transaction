import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { formatPrice } from 'src/app/utils/helpers';
import { Buy } from 'src/app/models/buy';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css']
})
export class BuyPageComponent  implements OnInit{
  formatPrices = formatPrice;
   userObject: any = localStorage && localStorage.getItem('USER');
   user:any= JSON.parse(this.userObject);

  productObject: any = localStorage && localStorage.getItem('PRODUCT');
  product: any = JSON.parse(this.productObject);

  totalPrice = this.user.adminFeeML + this.product.price;

  constructor(public api: ApiService, private router: Router) {}
  model = new Buy(
    '',
    this.product.price,
    this.product.product_name,
    this.product.category,
    this.product.sku_code,
    this.product.seller_name,
    this.product.brand,
    true,
    'Pending'
  );
  submitted = false;
  errormessage = '';

  favoriteColorControl = new FormControl('');
  onSubmit() {
    this.submitted = true;
    this.api.buy(this.model).subscribe(
      (data: any) => {
        // nyimpan acces_token dan refresh_token
        // this.router.navigate(['/transaction-page']);
        // dan redirect ke halaman dashboard
        console.log(data);
      },
      (err: any) => {
        console.log(err);
        this.errormessage = err.error.message;
      }
    );
  }

  ngOnInit(): void {
    console.log(this.product);
  }
}
