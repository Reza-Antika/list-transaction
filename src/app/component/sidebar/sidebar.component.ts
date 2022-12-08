import { Component } from '@angular/core';
import {faCoins, faHome, faFile, faShop, faUser, faGear} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  faCoins = faCoins;
  faHome = faHome;
  faFile = faFile;
  faShop = faShop;
  faUser = faUser;
  faGear = faGear;
}
