// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
//
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
//
// import {BrowserModule} from '@angular/platform-browser';
// import {NgModule} from '@angular/core';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {HttpModule} from '@angular/http';
//
// import {AppComponent} from './app.component';
// import {AuthModule} from "./auth/auth.module";
 import {routing} from './app-routing.module';
// import {SingUpComponent} from './sing-up/sing-up.component';
// import {LoginPageComponent} from "./login/login-page/login-page.component";


import {HomeComponent} from './home/home.component';
import {UsersListComponent} from "./users/users-list/users-list.component";
import {UserService} from "./user.service";
import {AuthGuard} from "./auth.guard";

import {User} from "./auth/user";
import {AuthService} from "./auth/auth.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {SingUpComponent} from "./sing-up/sing-up.component";
import {LoginPageComponent} from "./login/login-page/login-page.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthModule} from "./auth/auth.module";
import {HttpModule} from "@angular/http";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import { RegComponent } from './reg/reg.component';
import {MultiAlertsComponent} from "./multi-alerts";
import {AlertModule} from "./alert";
// import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    SingUpComponent,
    LoginPageComponent,
    //HomePagesComponent,
    UsersListComponent,
    HomeComponent,
    RegComponent,
   MultiAlertsComponent,
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AuthModule,
    ReactiveFormsModule,
    AlertModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [
    UserService,
    AuthGuard,

    AuthService,
    User,

  ],
  bootstrap: [AppComponent,]
})
export class AppModule {
}
