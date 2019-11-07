import { Injectable } from '@angular/core';
import {AuthHttp} from "angular2-jwt";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import {User} from "./auth";
import {Observable} from "rxjs";

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
  saveImg(img: any){
    const formData = new FormData();

    formData.append('file', img);

    return this.authHttp.post(`${environment.serverUrl}img/hi`,img).map(res => res.json());
  }

}
