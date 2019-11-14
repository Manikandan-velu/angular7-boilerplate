import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})

export class DashboardComponent implements OnInit {

  constructor(public router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  logOut() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
