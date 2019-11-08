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
import {MultiAlertsComponent} from "./multi-alerts";
import {AlertModule} from "./alert";
import {AngularDraggableModule} from "angular2-draggable";
import {ResizableModule} from "angular-resizable-element";
import {NgxFileDropModule} from "ngx-file-drop";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserPageComponent } from './user-page/user-page.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { AlertComponent } from './alert/alert.component';
import * as $ from "jquery";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
@NgModule({
  declarations: [
    AppComponent,
    SingUpComponent,
    LoginPageComponent,
    //HomePagesComponent,
    UsersListComponent,
    HomeComponent,
   MultiAlertsComponent,
   UserPageComponent,
   NavbarComponent,

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
    AngularDraggableModule,
    ResizableModule,
    NgxFileDropModule,
    BrowserAnimationsModule,

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
