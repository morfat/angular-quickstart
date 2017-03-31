import { Injectable } from '@angular/core';
import {GlobalService} from '../_globals/global.service';
//import {User} from './user';

import {Observable} from 'rxjs/Observable';


@Injectable()
export class UserService{
    constructor(private globalService:GlobalService){}
    private userUrl=this.globalService.getUrl('/users/');

  

getAll():Observable<any>{
    
    return this.globalService.get(this.userUrl);
   }

getAllStaff():Observable<any>{
    let url=`${this.userUrl}?is_staff=1`;
    return this.globalService.get(url);
   }

getAllByGroup(groupId):Observable<any>{
    let url=`${this.userUrl}?groups=${groupId}`;
    return this.globalService.get(url);
   }


create(user):Observable<any>{
    return this.globalService.post(this.userUrl,user);
   }

edit(selectedUser):Observable<any>{
    
    let url=`${this.userUrl}${selectedUser.id}/`;

    return this.globalService.put(url,selectedUser);
   }


delete(selectedUser):Observable<any>{
    let url=`${this.userUrl}${selectedUser.id}/`;
    return this.globalService.delete(url);
   }

resetPassword(user):Observable<any>{
    let url=`${this.userUrl}reset-password/`;
    
    return this.globalService.post(url,user);
   }


changePassword(user):Observable<any>{
      //login to api.
      let url=`${this.userUrl}change-password/`;
      return this.globalService.post(url,user);
    
  }

       
}
