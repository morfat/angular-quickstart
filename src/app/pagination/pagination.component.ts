/* for now , global implements pagination */
import { Component,Input,Output,EventEmitter} from '@angular/core';
import {PaginationService} from './pagination.service';
import {Pagination,HtmlContext,PageLink} from './pagination';
import {GlobalService} from '../_globals/global.service';

@Component({
  selector: 'pagination-component',
  templateUrl: './pagination.component.html',
  providers:[PaginationService,],
  //styleUrls: ['./.component.css']
})
export class PaginationComponent {

  constructor(private globalService:GlobalService,private paginationService:PaginationService){}
  //set 
  //groups:Group[];

 //pagination values 
   
   @Input() pagination=new Pagination();
   @Output() onPagination=new EventEmitter<any>();
  

  

    /*pagination methods */
      getDataByLink(url:any){
        this.paginationService.getData(url).subscribe(
       response=>(
       this.pagination=response.data.pagination,
       //emitt data to parent view 
       this.onPagination.emit(response.data.results),
       
       this.globalService.displayResponseMessage(response)
       ),
       error=> ( this.globalService.displayResponseMessage(error))
              );
      }
      



}
