import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdministrationComponent} from "./administration.component";
import {AdminGuard} from "./admin.guard";
import {adminRote} from "./admin.rotes";
import {RouterModule} from "@angular/router";
import {IconsModule, MDBBootstrapModule} from "angular-bootstrap-md";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AdministrationComponent,
    //ModalEditComponent

  ],
  imports: [

    CommonModule,
    RouterModule.forChild(adminRote),
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    IconsModule,



  ],

  //exports: [ModalEditComponent],
  //entryComponents: [ModalEditComponent],
  providers:[
    AdminGuard,
    //MDBSpinningPreloader
  ]
})
export default class AdminModule { }
