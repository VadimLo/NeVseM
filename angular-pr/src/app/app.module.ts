
import {routing} from './app-routing.module';


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
import {IconsModule, MDBBootstrapModule} from "angular-bootstrap-md";
import {MultiAlertsComponent} from "./multi-alerts";
import {AlertModule} from "./alert";
import {AngularDraggableModule} from "angular2-draggable";
import {ResizableModule} from "angular-resizable-element";
import {NgxFileDropModule} from "ngx-file-drop";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserPageComponent} from './user-page/user-page.component';
import {NavbarComponent} from './navbar/navbar.component';
import {TShirt} from './auth/tshirt';
import { AdministrationComponent } from './administration/administration.component'

import AdminModule from "./administration/admin.module";
import { ModalEditComponent } from './modal-edit/modal-edit.component';

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
    ModalEditComponent




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
    IconsModule,
  ],
  entryComponents: [ ModalEditComponent ],
  providers: [
    UserService,
    AuthGuard,

    AuthService,
    User,
    TShirt,
    AdminModule,

  ],

  bootstrap: [AppComponent,],

 // exports:[AdminModule]
})
export class AppModule {
}
