import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//components
import { UserListComponent }   from './user.component';

import { PaginationModule }   from '../pagination/pagination.module';
import { ChangePasswordComponent }   from './change-password.component';


const routes: Routes = [
  {path:'users',component:UserListComponent},
   {path:'change-password',component:ChangePasswordComponent},
  ];

@NgModule({
  declarations:[UserListComponent,ChangePasswordComponent,],
  imports: [ RouterModule.forRoot(routes),BrowserModule , PaginationModule,FormsModule],
  exports: [ RouterModule,]
})
export class UserRoutingModule {}