import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class DataService {

  private oneTshirt = new BehaviorSubject('default message');
  currentTshirt = this.oneTshirt.asObservable();

  private user = new BehaviorSubject('default message');
  currentUser = this.user.asObservable();

  private five = new BehaviorSubject<any[]>([]);
  fiveTs = this.five.asObservable();


  constructor() {
  }

  changeMessage(message: any) {
    this.oneTshirt.next(message)
  }

  changeMessage2(message: any[]) {
    this.five.next(message)
  }

  setUser(message: any) {
    this.user.next(message);
  }

}
