import { Component, OnInit, Input } from '@angular/core';
import { CONSTANTS } from 'src/app/Helpers/Constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() logged: boolean;

  constructor() { }

  ngOnInit() {
  }

  logOut() {
    localStorage.removeItem(CONSTANTS.TOKEN);
  }

}
