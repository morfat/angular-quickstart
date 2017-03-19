import { NgModule }             from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PaginationComponent }   from '../pagination/pagination.component';



@NgModule({
  declarations:[PaginationComponent,],
  imports: [BrowserModule ],
  exports: [PaginationComponent,]
})
export class PaginationModule {}