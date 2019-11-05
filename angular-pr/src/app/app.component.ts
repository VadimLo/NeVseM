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


  constructor(
    private securityService: SecurityService,

  ) {

  }


  ngOnInit() {

  }






}
