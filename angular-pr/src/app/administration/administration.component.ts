import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {
 users= [];
  errorMessage: string;
  headElements = ['id', 'first', 'last', 'handle'];

  constructor(private userService: UserService,
              ) { }

  ngOnInit() {
    this.userService.findAll().subscribe(
      users => this.users = users,
      error => this.errorMessage = error.json().message
    );
  }

  remove(id: number) {
    this.userService.deleteOne(id).subscribe();
    this.users = this.users.filter(item => item.userId != id);
  }
  deleteUser(id: number) {

  }

}
