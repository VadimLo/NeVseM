import { Injectable } from '@angular/core';
import {AuthHttp} from "angular2-jwt";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import {User} from "./auth";

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
    return this.http.post<string>(`${environment.serverUrl}singup/reg`,user);
  }

}
