import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//components
import { UserListComponent }   from './user.component';

import { PaginationModule }   from '../pagination/pagination.module';
import { ChangePasswordComponent }   from './change-password.component';
import {RegisterComponent} from './register.component';
import { ResetPasswordComponent }   from './reset-password.component';

//guards
import {AuthGuard} from '../_guards/auth.guard';


const routes: Routes = [
   {path:'register',component:RegisterComponent},
  
  {path:'users',component:UserListComponent,canActivate:[AuthGuard]},
   {path:'change-password',component:ChangePasswordComponent,canActivate:[AuthGuard]},
    {path:'reset-password',component:ResetPasswordComponent},
  ];

@NgModule({
  declarations:[UserListComponent,ChangePasswordComponent,ResetPasswordComponent,RegisterComponent],
  imports: [ RouterModule.forRoot(routes),BrowserModule , PaginationModule,FormsModule],
  exports: [ RouterModule,]
})
export class UserRoutingModule {}