import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {LoginPageComponent} from "./login/login-page/login-page.component";

import {AuthGuard} from "./auth.guard";
import {UsersListComponent} from "./users/users-list/users-list.component";
import {SingUpComponent} from "./sing-up/sing-up.component";
import {UserPageComponent} from "./user-page/user-page.component";
import {AdministrationComponent} from "./administration/administration.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'users',
    component: UsersListComponent
    , canActivate: [AuthGuard]
  },
  {
    path:"singup",
    component: SingUpComponent
  },
  {
    path:"page",
    component:UserPageComponent
  },
  // {
  //   path:'home',
  //   loadChildren: './home/home.module',
  //
  // },
  {
    path:'home',
    component: HomeComponent
    , canActivate: [AuthGuard]

  },
  {
    path:'admin',
    loadChildren:'./administration/admin.module'
  }

];

export const routing = RouterModule.forRoot(routes);
