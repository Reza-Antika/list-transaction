import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { formatPrice } from 'src/app/utils/helpers';
import {faFilter, faArrowUp, faArrowDown, faCirclePlus, faEllipsis} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  faFilter = faFilter;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faCirclePlus = faCirclePlus;
  faEllipsis = faEllipsis;

  formprices = formatPrice;
  portofolio :any = {}
  userObject:any = (localStorage && localStorage.getItem('USER'));
  user:any= JSON.parse(this.userObject);
  constructor (public api: ApiService){}

  ngOnInit(): void {
    console.log(this.user);
    this.api.getPortofolio().subscribe(
      (data:any)=>{
        console.log(data);
      },
      (err) =>{
        console.log(err);
      }
    )
  }
}
