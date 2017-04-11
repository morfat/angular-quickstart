import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//components
import { GroupListComponent }   from './group.component';
import {GroupUsersComponent} from './group-users.component';
import {GroupPermissionsComponent} from './group-permissions.component';

//import { PaginationComponent }   from '../pagination/pagination.component';
import { PaginationModule }   from '../pagination/pagination.module';

//guards
import {AuthGuard} from '../_guards/auth.guard';


const routes: Routes = [
  {path:'group/:id/users',component:GroupUsersComponent,canActivate:[AuthGuard]},
  {path:'group/:id/permissions',component:GroupPermissionsComponent,canActivate:[AuthGuard]},
  {path:'groups',component:GroupListComponent,canActivate:[AuthGuard]},

  ];

@NgModule({
  declarations:[GroupListComponent,GroupUsersComponent,GroupPermissionsComponent,],
  imports: [RouterModule.forRoot(routes),BrowserModule , PaginationModule,FormsModule],
  exports: [ RouterModule,]
})
export class GroupRoutingModule {}