import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { CognitoService } from '../services/cognito/cognito.service';
import { FlashMessage } from 'angular-flash-message';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  constructor(private auth: CognitoService, private _router: Router, private flashMessage: FlashMessage) { }

  signup(form: NgForm) {
    const email = form.value.email;
    const username = form.value.username;
    const password = form.value.password;
    const confirmPassword = form.value.confirm_password;

    if (password != confirmPassword) {
      this._router.navigateByUrl("/signup");
      this.flashMessage.danger("Las contraseñas ingresadas no coinciden", { close: true, navigate: '/signup' });
    } else if (password.length == 0 || confirmPassword.length == 0) {
      this.flashMessage.danger("Faltan campos por llenar", { close: true, navigate: '/signup' });
    } else if (username.length == 0) {
      this.flashMessage.danger("Ingresar un nombre de usuario", { close: true, navigate: '/signup' });
    } else {
      this.auth.signup(email, password, username);
    }
  }

}
