import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from './components/registration/registration.component';
import {RecordsComponent} from './components/records/records.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {CreateEmployeeCanDeactivateGuardService} from './guards/create-employee-canDeactivate.service';

const routes: Routes = [
   { path: 'home', component: HomeComponent ,
   children: [
    {
      path: 'records', // child route path
      component: RecordsComponent // child route component that the router renders
    },
    {
      path: 'addEmployee', // child route path
      component: RegistrationComponent // child route component that the router renders
    },
    {
      path: '', // child route pathho
      component: RecordsComponent // child route component that the router renders
    }
  ] },
  { path: 'registration', component: RegistrationComponent ,canDeactivate:[CreateEmployeeCanDeactivateGuardService]},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes ,{useHash: false}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}