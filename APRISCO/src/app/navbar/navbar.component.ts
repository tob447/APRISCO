import { Component } from '@angular/core';
import { CognitoService } from "../services/cognito/cognito.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private _auth: CognitoService, private _router: Router) { }

  doLogout() {
    this._auth.logOut();
    this._router.navigateByUrl('/login');
  }

}
