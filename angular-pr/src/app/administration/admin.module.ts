import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdministrationComponent} from "./administration.component";
import {AdminGuard} from "./admin.guard";
import {adminRote} from "./admin.rotes";
import {RouterModule} from "@angular/router";
import {MDBBootstrapModule} from "angular-bootstrap-md";



@NgModule({
  declarations: [
    AdministrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRote),
    MDBBootstrapModule.forRoot(),

  ],
  providers:[
    AdminGuard
  ]
})
export default class AdminModule { }
