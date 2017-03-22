import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//components
import { ContentTypeListComponent }   from './content_type.component';

//import { PaginationComponent }   from '../pagination/pagination.component';
import { PaginationModule }   from '../pagination/pagination.module';


const routes: Routes = [
  {path:'content-types',component:ContentTypeListComponent},
  ];

@NgModule({
  declarations:[ContentTypeListComponent,],
  imports: [RouterModule.forRoot(routes),BrowserModule , PaginationModule,FormsModule],
  exports: [ RouterModule,]
})
export class ContentTypeRoutingModule {}