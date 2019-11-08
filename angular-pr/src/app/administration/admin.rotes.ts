
import {Routes} from "@angular/router";
import {AdministrationComponent} from "./administration.component";
import {AdminGuard} from "./admin.guard";

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    canActivate: [AdminGuard]
  }
];

export const adminRote = routes;
