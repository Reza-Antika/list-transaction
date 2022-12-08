import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { formatPrice } from 'src/app/utils/helpers';
import {faFilter, faArrowUp, faArrowDown, faCirclePlus, faEllipsis} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  faFilter = faFilter;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faCirclePlus = faCirclePlus;
  faEllipsis = faEllipsis;

  transactions:any={};
  formatPrices = formatPrice;
  constructor (public api: ApiService){}

  ngOnInit(): void {
    this.api.getTransaction().subscribe(
      (data:any) => {
        console.log(data);
        this.transactions = data.results;
      },
      (err) => {
        console.log(err);
      }
    )
  }
}

