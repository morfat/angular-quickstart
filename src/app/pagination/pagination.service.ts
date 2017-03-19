import { Injectable } from '@angular/core';
import {GlobalService} from '../_globals/global.service';
//import {Group} from './group';

import {Observable} from 'rxjs/Observable';


@Injectable()
export class PaginationService{
    constructor(private globalService:GlobalService){}
   // private groupUrl=this.globalService.getUrl('/groups/');

  
 getData(link:any):Observable<any>{
        return this.globalService.get(link);
}
    
       
}
