import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ErrorComponent} from './error/error.component';
import {CarsComponent} from './cars/cars.component';
import {RouteGuardService} from './services/route-guard.service';
import {User, UserComponent} from './user/user.component';
import {RentsComponent} from './rents/rents.component';
import {SelezionadateComponent} from './selezionadate/selezionadate.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'index',component:LoginComponent},
  {path:'register',component:UserComponent},
  {path:'home',component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'welcome/:userid',component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'cars',component:CarsComponent, canActivate:[RouteGuardService]},
  {path:'user',component:UserComponent,canActivate:[RouteGuardService]},
  {path:'editUser',component:UserComponent,canActivate:[RouteGuardService]},
  {path:'newrent',component:SelezionadateComponent, canActivate:[RouteGuardService]},
  {path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
