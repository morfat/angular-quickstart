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


const routes: Routes = [
  {path:'group/:id/users',component:GroupUsersComponent},
  {path:'group/:id/permissions',component:GroupPermissionsComponent},
  {path:'groups',component:GroupListComponent},

  ];

@NgModule({
  declarations:[GroupListComponent,GroupUsersComponent,GroupPermissionsComponent,],
  imports: [RouterModule.forRoot(routes),BrowserModule , PaginationModule,FormsModule],
  exports: [ RouterModule,]
})
export class GroupRoutingModule {}