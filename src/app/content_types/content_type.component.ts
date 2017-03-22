import { Component ,OnInit} from '@angular/core';
import {GlobalService} from '../_globals/global.service';
import {Settings} from '../_globals/settings';

import {ContentTypeService} from './content_type.service';
import {ContentType} from './content_type';

@Component({
  selector: 'content-type-index',
  templateUrl: './content_type.component.html',
  providers:[ContentTypeService,],
  //styleUrls: ['./.component.css']
})
export class ContentTypeListComponent implements OnInit {
 
  constructor(private globalService:GlobalService,private contentTypeService:ContentTypeService){}
  //set 
  contentTypes:ContentType[];

  //needed for pagination 
  pagination:any;
  onPagination(results:any){
    //get results paginated from pagination component 
    this.contentTypes=results;
  }

  ngOnInit(){
    this.listContentTypes();
   
  }


  public listContentTypes(){
    this.contentTypeService.getAll().subscribe(
      response=>(this.contentTypes=response.data.results,this.pagination=response.data.pagination,this.globalService.displayResponseMessage(response)),//success 
      error=>(this.globalService.displayResponseMessage(error)),//failure
      ()=>{}//complete 
      );//success,failure,complete

  }
  

}
