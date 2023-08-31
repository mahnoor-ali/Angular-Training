import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { login, signUp } from '../models/model';
import { AuthService } from '../Services/Auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  showLogin = false;
  authError: String = '';

  Login: login = {
    email: '',
    password: '',
  };

  SignUp: signUp = {
    name: '',
    email: '',
    password: '',
    phone: '',
    DefaultShippingAddress: '',
  };

  constructor(private auth: AuthService) {}
  ngOnInit(): void {
    //
  }

  signUp(data: NgForm): void {
    this.auth.registerUser(this.SignUp).subscribe((val) => {
      console.log(val);
    });
  }

  login(data: login): void {
    console.log('Login submitted wid value: ', data);
  }
}

/*
import { Component } from '@angular/core';
import { login, signUp } from '../models/model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  showLogin = false;
  authError: String = '';

  constructor(private seller: SellerService) {}

  signUp(data: signUp): void {
    console.warn(data);
    this.seller.userSignUp(data);
  }
  login(data: login): void {
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = 'Email or password is not correct';
      }
    });
  }
}

*/
