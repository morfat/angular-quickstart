import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { DashboardIndexComponent }   from './dashboard.component';

//guards
import {AuthGuard} from '../_guards/auth.guard';


const routes: Routes = [
  {path:'dashboard',component:DashboardIndexComponent,canActivate:[AuthGuard]},
 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },//empy
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },//any other


];

@NgModule({
  declarations:[DashboardIndexComponent],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule {}