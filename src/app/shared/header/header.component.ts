import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../../model/model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  public user: User;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;
  }

  logOut() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
