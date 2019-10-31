import {Component, OnInit} from '@angular/core';
import {SecurityService} from "./auth/security.service";
import {AuthService} from "./auth/auth.service";
import {SingUpComponent} from "./sing-up/sing-up.component";
import {AlertService} from "./alert";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  flag: boolean;

  constructor(
    private securityService: SecurityService,
    private authService: AuthService,
    private alertService: AlertService,

  ) {
    this.flag=this.securityService.isLoggedIn();
    console.log(this.securityService.isLoggedIn());
  }

  isLog() {

    return this.securityService.isLoggedIn();

  }
  unHidden(){
    this.flag=false
  }
  ngOnInit() {

  }

  logout() {
    this.authService.logout();
    this.flag=true;


  }




}
