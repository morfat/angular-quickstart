import { Injectable } from '@angular/core';
import {GlobalService} from '../_globals/global.service';
//import {Group} from './group';

import {Observable} from 'rxjs/Observable';


@Injectable()
export class GroupService{
    constructor(private globalService:GlobalService){}
    private groupUrl=this.globalService.getUrl('/groups/');

  

getAll():Observable<any>{
    return this.globalService.get(this.groupUrl);
   }

create(group):Observable<any>{
    return this.globalService.post(this.groupUrl,group);
   }

edit(selectedGroup):Observable<any>{
    
    let url=`${this.groupUrl}${selectedGroup.id}/`;

    return this.globalService.put(url,selectedGroup);
   }

patch(selectedGroup):Observable<any>{
    
    let url=`${this.groupUrl}${selectedGroup.id}/`;
    return this.globalService.patch(url,selectedGroup);
   }


delete(selectedGroup):Observable<any>{
    let url=`${this.groupUrl}${selectedGroup.id}/`;
    return this.globalService.delete(url);
   }

 manageUsers(action:any,groupId:any,userId:any){ //add or remove users form group 
        let url=`${this.groupUrl}manage-users/`;
       
        return this.globalService.post(url,{'action':action,'group':groupId,'user':userId});
    }



         
}
