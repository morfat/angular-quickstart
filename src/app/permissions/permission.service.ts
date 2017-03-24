import { Injectable } from '@angular/core';
import {GlobalService} from '../_globals/global.service';
//import {Permission} from './permission';

import {Observable} from 'rxjs/Observable';


@Injectable()
export class PermissionService{
    constructor(private globalService:GlobalService){}
    private permissionUrl=this.globalService.getUrl('/permissions/');

  

getAll():Observable<any>{
    return this.globalService.get(this.permissionUrl);
   }

create(permission):Observable<any>{
    return this.globalService.post(this.permissionUrl,permission);
   }

edit(selectedPermission):Observable<any>{
    
    let url=`${this.permissionUrl}${selectedPermission.id}/`;

    return this.globalService.put(url,selectedPermission);
   }


delete(selectedPermission):Observable<any>{
    let url=`${this.permissionUrl}${selectedPermission.id}/`;
    return this.globalService.delete(url);
   }



       
}
