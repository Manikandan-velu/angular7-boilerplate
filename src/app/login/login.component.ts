import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from './../services/authentication.service';
import * as passwordHash from 'js-sha512';
import { first } from 'rxjs/operators';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  private userEmail: string;
  private userPass: string;
  public loginForm: FormGroup;
  public isSubmitted: boolean = false;

  constructor(
    private titleService: Title,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router) {
      this.titleService.setTitle('Login');
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }


  get loginFormControls() {
    return this.loginForm.controls;
  }

  userLogin() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.userEmail = this.loginForm.value.email;
    this.userPass = passwordHash.sha512(this.loginForm.value.password);
    console.log(this.userPass);
    this.authenticationService.login(this.userEmail, this.userPass)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/dashboard']);
        },
        err => {
          console.log(err.error.errors);
        });
  }

}
