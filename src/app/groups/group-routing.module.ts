import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//components
import { GroupListComponent }   from './group.component';
import {GroupUsersComponent} from './group-users.component';

//import { PaginationComponent }   from '../pagination/pagination.component';
import { PaginationModule }   from '../pagination/pagination.module';


const routes: Routes = [
  {path:'group/:id/users',component:GroupUsersComponent},
  {path:'groups',component:GroupListComponent},

  ];

@NgModule({
  declarations:[GroupListComponent,GroupUsersComponent,],
  imports: [RouterModule.forRoot(routes),BrowserModule , PaginationModule,FormsModule],
  exports: [ RouterModule,]
})
export class GroupRoutingModule {}