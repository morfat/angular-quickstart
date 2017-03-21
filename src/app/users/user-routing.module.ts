import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//components
import { UserListComponent }   from './user.component';

import { PaginationModule }   from '../pagination/pagination.module';


const routes: Routes = [
  {path:'users',component:UserListComponent},
  ];

@NgModule({
  declarations:[UserListComponent,],
  imports: [ RouterModule.forRoot(routes),BrowserModule , PaginationModule,FormsModule],
  exports: [ RouterModule,]
})
export class UserRoutingModule {}