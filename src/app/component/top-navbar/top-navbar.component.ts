import { Component } from '@angular/core';
import {faCoins} from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent {
  faCoins = faCoins;

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
