import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Login } from 'src/app/models/login';
import { FormControl } from '@angular/forms';
import {faCoins} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faCoins = faCoins;

  constructor(private api: ApiService, private router:Router) {}
  model = new Login('', '');
  submitted = false;
  errormessage ='';
  favoriteColorControl = new FormControl('');
  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    this.api.login(this.model).subscribe(
      (data: any) => {
        this.router.navigate(['/main-dashboard'])
        localStorage.setItem('TOKEN', data.tokens.access.token);
        localStorage.setItem('USER', JSON.stringify(data.user));

        console.log(data);
      },
      (err: any) => 
      // console.log(err)
      {
        this.errormessage = err.error.message;
      }
    );
  }
  ngOnInit(): void {}
}
