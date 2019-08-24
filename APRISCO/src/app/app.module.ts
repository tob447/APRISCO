import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {FlashMessageModule} from 'angular-flash-message';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import {CognitoService} from "./services/cognito/cognito.service";
//import { HomeComponent } from './home/home.component';
//import { AllPlantsComponent } from './all-plants/all-plants.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent
    //HomeComponent
    //AllPlantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    FlashMessageModule
  ],
  providers: [CognitoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
