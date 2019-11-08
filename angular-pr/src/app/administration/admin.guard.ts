import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  user:any;
  constructor( private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.isAdmin()){
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
  isAdmin(){
    this.user = JSON.parse(localStorage.getItem('user'));

    return this.user.role=="ROLE_ADMIN";
  }

}
