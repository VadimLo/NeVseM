import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-tshirt-buy',
  templateUrl: './tshirt-buy.component.html',
  styleUrls: ['./tshirt-buy.component.scss']
})
export class TshirtBuyComponent implements OnInit {
  user: any= null;
  message: any;

  constructor(private data: DataService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.data.currentTshirt.subscribe(message => {
      this.message = message;
      this.userService.findUserByTshirtId(this.message.id).subscribe(
        user =>{
          this.user = user;
          this.data.setUser(user);
        }
      );
    });

    console.log(this.message)
  }

}
