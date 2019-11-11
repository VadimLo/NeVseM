import { Injectable } from '@angular/core';
import {AuthHttp} from "angular2-jwt";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import {User} from "./auth";
import {Observable} from "rxjs";
import {TShirt} from "./auth/tshirt";
import {Headers} from "@angular/http";

@Injectable()
export class UserService {

  constructor(private authHttp: AuthHttp, private http: HttpClient
  ) { }

  findAll() {
    return this.authHttp.get(`${environment.serverUrl}users`).map(res => res.json());
  }

  findOne(id: number) {
    return this.authHttp.get(`${environment.serverUrl}users/${id}`).map(res => res.json());
  }

  deleteOne(id: number){
    return this.authHttp.delete(`${environment.serverUrl}users/${id}`,);
  }
  register(user: User){
    return this.http.post(`${environment.serverUrl}singup/reg`,user,{  responseType: 'text'});
  }
  update(user:any){
    return this.authHttp.post(`${environment.serverUrl}users/update`, user);
  }
  saveImg(tshirt: TShirt){

    return this.authHttp.post(`${environment.serverUrl}img/hi`,tshirt);
  }
  findAllTshirts(){
    return this.authHttp.get(`${environment.serverUrl}tshirts`).map(res => res.json());
  }
  findUserByTshirtId(id:any){
    return this.authHttp.get(`${environment.serverUrl}tshirt/${id}`,).map(res => res.json());
  }

}
