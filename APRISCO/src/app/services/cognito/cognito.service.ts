import { Injectable } from '@angular/core';
import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { Router } from '@angular/router';
import {FlashMessage} from 'angular-flash-message';

const poolData = {
    UserPoolId: '******', // Your user pool id here
    ClientId: '*******' // Your client id here  
};

const userPool = new CognitoUserPool(poolData);

@Injectable()
export class CognitoService {

    cognitoUser: any;

    constructor(private _router: Router, private flashMessage: FlashMessage) { }

    signup(email, password, username) {
        const attributeList = [];

        var dataEmail = {
            Name: 'email',
            Value: email
        };

        var dataUsername = {
            Name: 'preferred_username',
            Value: username
        }

        var emailAttributes = new CognitoUserAttribute(dataEmail);
        var usernameAttributes = new CognitoUserAttribute(dataUsername);

        attributeList.push(emailAttributes);
        attributeList.push(usernameAttributes);


        userPool.signUp(email, password, attributeList, null, (err, result) => {
            var error = " ";
            if (err) {
                //console.log("signUp error", err.message);
                if(err.message.includes("Value at 'username' failed to satisfy constraint")) {
                    this.flashMessage.danger("Ingresar un email", {close: true, navigate: '/signup'});
                } else if(err.message.includes("Password did not conform with policy:")) {
                    this.flashMessage.danger("La contraseña debe contener letras en minúscula, mayúscula, números y caracteres especiales", {close: true, navigate: '/signup'});
                }
            } else {
                this.cognitoUser = result.user;
                //console.log("signUp success", result);
                this._router.navigateByUrl("/login");
            }
        });

    }


    login(email, password) {

        const authenticationData = {
            Username: email,
            Password: password,
        };
        const authenticationDetails = new AuthenticationDetails(authenticationData);

        const userData = {
            Username: email,
            Pool: userPool
        };

        const cognitoUser = new CognitoUser(userData);

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: result => {
                var accessToken = result.getAccessToken();
                //console.log("access token " + accessToken + '\n');
                var idToken = result.getIdToken();
                //console.log(idToken);
                var refreshToken = result.getRefreshToken();
                //console.log("refresh token " + refreshToken + '\n');
                
                //this._router.navigateByUrl("/allPlants");
            },
            onFailure: function (err) {
                //console.log(err.message);
                if(err.message == "Incorrect username or password.") {
                    this.flashMessage.danger("Contraseña incorrecta o email incorrecto", {close: true, navigate: '/login'});
                }
            }
        });
    }

    isLoggedIn() {
        return userPool.getCurrentUser() != null;
    }

    getAuthenticatedUser() {
        // gets the current user from the local storage
        return userPool.getCurrentUser();
    }

    logOut() {
        this.getAuthenticatedUser().signOut();
        this.cognitoUser = null;
    }
}