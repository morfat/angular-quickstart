import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

//components
import { GroupListComponent }   from './group.component';

import { PaginationComponent }   from '../pagination/pagination.component';


const routes: Routes = [
  {path:'groups',component:GroupListComponent},
  ];

@NgModule({
  declarations:[GroupListComponent,PaginationComponent],
  imports: [ RouterModule.forRoot(routes),BrowserModule ,],
  exports: [ RouterModule,]
})
export class GroupRoutingModule {}