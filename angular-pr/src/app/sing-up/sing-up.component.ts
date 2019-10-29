import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {SecurityService} from "../auth/security.service";
import {first} from "rxjs/operators";
import {AlertService} from "../auth/alert.service";
import {User} from "../auth";
import {any} from "codelyzer/util/function";

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  mes:string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private securityService: SecurityService,
    private userService: UserService,
    private alertService: AlertService,
    private user: User
  ) {
    if (this.securityService.isLoggedIn()) {
      this.router.navigate(['/'])
    }
  }

  get f() {
    return this.registerForm.controls;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit

    this.alertService.clear();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.user =this.registerForm.value;
    this.loading = true;
    console.log( this.user);
    this.userService.register(this.user)
    // .pipe(first())
      .subscribe(
        data => {

          //this.alertService.success('Registration successful', true);
          if (data=="INTERNAL_SERVER_ERROR"){
            this.mes ="User already consist. Please choice another username";

          }else{
            this.router.navigate(['/login']);
          }


        }

        );

  }

}
