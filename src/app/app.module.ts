import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { CarsComponent } from './cars/cars.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { RentsComponent } from './rents/rents.component';
import { SelezionadateComponent } from './selezionadate/selezionadate.component';
import { SelezionaautoComponent } from './selezionaauto/selezionaauto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    CarsComponent,
    NavbarComponent,
    UserComponent,
    RentsComponent,
    SelezionadateComponent,
    SelezionaautoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    MatOptionModule,
  ],
  providers: [FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
