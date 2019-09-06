import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Angular Boilerplate';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {  }

  ngOnInit(): void {
    //redirect to login page by default loading
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/dashboard']);
    }else{
      this.router.navigate(['/login']);
    }
  }

}
