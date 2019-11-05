import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {SecurityService} from "../auth/security.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private securityService: SecurityService,
    private authService: AuthService,
  ) {

  }

  ngOnInit() {
  }
  isLog() {

    return this.securityService.isLoggedIn();

  }
  logout() {
    this.authService.logout();



  }
}
