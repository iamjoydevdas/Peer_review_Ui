import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders, } from "@angular/common/http";
import * as _ from 'lodash';
import { Login } from './login';
import { Response } from '../common/Response';

@Component({
  selector: 'app-login-module',
  templateUrl: './login-module.component.html',
  styleUrls: ['./login-module.component.css']
})

//const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

export class LoginModuleComponent implements OnInit {
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  
  login:Login = {
    userName:null,
    password:''
  };
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  loginRequest(): void {
    console.log(this.login.userName);
    debugger;
    this.http.post("http://localhost:8080/PeerReview/rest/pr/login", this.login, {headers : this.headers})
      .subscribe(rs =>{
        console.log(rs);////dasdasdasdsad
      })
  }
}
