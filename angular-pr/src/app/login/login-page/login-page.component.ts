import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../../alert";
import htmlToImage from 'html-to-image';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  netImage:any = "../assets/qw.jpg";
  model: any = {};
  loading = false;
  returnUrl: string;
  errorMessage: string;
  img:any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  singUpRedirect(){
    this.router.navigate(['/singup']);
  }

  login() {
    this.loading = true;
    this.errorMessage = null;
    this.authService.login(this.model.username, this.model.password)
      .flatMap(data => {
        return this.authService.getMe();
      })
      .subscribe(
        data => {
          localStorage.setItem('user', JSON.stringify(data));
          this.router.navigate([this.returnUrl]);
          this.success("You successfully login")
        },
        error => {
          this.loading = false;
          this.errorMessage = error;
          this.errorMes("Incorrect username or password. Please try again.");
        }
      );
  }
  success(message: string) {
    this.alertService.success(message);
  }

  errorMes(message: string) {
    this.alertService.error(message);
  }

  info(message: string) {
    this.alertService.info(message);
  }

  warn(message: string) {
    this.alertService.warn(message);
  }

  clear() {
    this.alertService.clear();
  }

  fun(){


    htmlToImage.toPng(document.getElementById('screen')).then(dataUrl=> {

       this.img = new Image();
      this.img.src = dataUrl;
      document.getElementById("screensh").appendChild(this.img);
    })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }

}
