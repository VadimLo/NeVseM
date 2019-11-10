import {Component, OnInit, ViewChild, } from '@angular/core';
import {UserService} from "../user.service";
import {TshirtBuyComponent} from "../tshirt-buy/tshirt-buy.component";
import {DataService} from "../tshirt-buy/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tshirts:any ;
  @ViewChild(TshirtBuyComponent, {static: true}) child;

  constructor(private userService: UserService,
              private data: DataService) {
  }

  message: string = "hi lol";

  ngOnInit() {
    //if (this.data.fiveTs == null) {
    this.data.fiveTs.subscribe(five=>this.tshirts=five);
    if(this.tshirts[0]===undefined){
      this.userService.findAllTshirts().subscribe(
        tshirts => {
          this.tshirts = tshirts;
          this.data.changeMessage2(this.tshirts);
        }
      );
    }


    // }else{
    //   //this.tshirts = this.data.fiveTs
       console.log(this.tshirts);
    //

    //   console.log(this.tshirts);
    // }



  }

  buy(mes: any) {
    this.data.changeMessage(mes);
  }


}
