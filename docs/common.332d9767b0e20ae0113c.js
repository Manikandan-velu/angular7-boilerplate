(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{ej43:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var n=r("26FU"),s=r("67Y/"),o=r("CcnG"),u=r("t/Na"),i=function(){function e(e){this.http=e,this.currentUserSubject=new n.a(JSON.parse(sessionStorage.getItem("currentUser"))),this.currentUser=this.currentUserSubject.asObservable()}return Object.defineProperty(e.prototype,"currentUserValue",{get:function(){return this.currentUserSubject.value},enumerable:!0,configurable:!0}),e.prototype.login=function(e,t){var r=this;return this.http.post("http://dev.api.staller.show/v1/users/login",{email:e,password:t}).pipe(Object(s.a)(function(e){return r.user=e.data,r.user&&r.user.access_token&&(sessionStorage.setItem("currentUser",JSON.stringify(r.user)),sessionStorage.setItem("isLoggedin","true"),r.currentUserSubject.next(r.user)),r.user}))},e.prototype.logout=function(){sessionStorage.removeItem("currentUser"),sessionStorage.removeItem("isLoggedin"),this.currentUserSubject.next(null)},e.ngInjectableDef=o.T({factory:function(){return new e(o.X(u.c))},token:e,providedIn:"root"}),e}()}}]);