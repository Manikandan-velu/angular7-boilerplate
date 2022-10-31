import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/model';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  public user: User;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    let data = { email: email, password: password };
    return this.http.post<any>('http://localhost/v1/users/login', data)
      .pipe(map(res => {
        // login successful if there's a jwt token in the response
        this.user = res['data'];
        if (this.user) {
          // store user details and jwt token in session storage to keep user logged in between page refreshes
          sessionStorage.setItem('currentUser', JSON.stringify(this.user));
          sessionStorage.setItem('isLoggedin', 'true');
          this.currentUserSubject.next(this.user);
        }
        return this.user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('isLoggedin');
    this.currentUserSubject.next(null);
  }

}
