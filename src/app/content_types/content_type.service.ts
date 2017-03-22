import { Injectable } from '@angular/core';
import {GlobalService} from '../_globals/global.service';
//import {ContentType} from './contentType';

import {Observable} from 'rxjs/Observable';


@Injectable()
export class ContentTypeService{
    constructor(private globalService:GlobalService){}
    private contentTypeUrl=this.globalService.getUrl('/content-types/');

  

getAll():Observable<any>{
    return this.globalService.get(this.contentTypeUrl);
   }



       
}
