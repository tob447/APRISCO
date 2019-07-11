import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';
import { CognitoService } from '../services/cognito/cognito.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private auth: CognitoService, private _router: Router) { }

  login(f: NgForm) {
    const email = f.value.email_li;
    const password = f.value.password_li;
    
    this.auth.login(email, password);
  }

}
