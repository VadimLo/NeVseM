import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {SecurityService} from "../auth/security.service";
import {User} from "../auth";
import {DataService} from "../tshirt-buy/data.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private user: any;
  private userFromData: any;
  constructor(
    private securityService: SecurityService,
    private authService: AuthService,
    private data:DataService,
    private  userService:UserService

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
  isAdmin(){
    this.user = JSON.parse(localStorage.getItem('user'));

    return this.user.role=="ROLE_ADMIN";
  }
  toPage(){
    this.data.currentUser.subscribe(user=>this.userFromData=user);
    console.log(this.user);
    if(this.user.username!=this.userFromData.username){
      this.userService.findOne(this.user.userId).subscribe(
        user=> this.data.setUser(user)
      )
    }
  }
}
