import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//components
import { PermissionListComponent }   from './permission.component';

//import { PaginationComponent }   from '../pagination/pagination.component';
import { PaginationModule }   from '../pagination/pagination.module';

//guards
import {AuthGuard} from '../_guards/auth.guard';


const routes: Routes = [
  {path:'permissions',component:PermissionListComponent,canActivate:[AuthGuard]},
  ];

@NgModule({
  declarations:[PermissionListComponent,],
  imports: [RouterModule.forRoot(routes),BrowserModule , PaginationModule,FormsModule],
  exports: [ RouterModule,]
})
export class PermissionRoutingModule {}