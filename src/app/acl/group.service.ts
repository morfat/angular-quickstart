import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class AclGroupService {
        
    constructor(private http:Http,
    private authenticationService: AuthenticationService){}
    
     getAclGroups():Observable<any>{
      let url=this.authenticationService.getUrl('/users/groups/');
      return this.authenticationService.get(url);
      
        }


    getPermissions(group,find){
        let path=`/users/permissions/?group=${group}&find=${find}`;
        let url=this.authenticationService.getUrl(path);
        return this.authenticationService.get(url);
    }

     updateGroup(group:any){
        let path=`/users/groups/${group.id}/`;
        let url=this.authenticationService.getUrl(path);
        return this.authenticationService.patch(url,group);
    }

 deleteGroup(group:any){
        let path=`/users/groups/${group.id}/`;
        let url=this.authenticationService.getUrl(path);
        return this.authenticationService.delete(url);
    }
     createGroup(group:any){
        let path=`/users/groups/`;
        let url=this.authenticationService.getUrl(path);
        return this.authenticationService.post(url,group);
    }


 addUser(group_id:any,user_id:any){
        let path=`/users/groups/users/`;
        let url=this.authenticationService.getUrl(path);
        return this.authenticationService.post(url,{'action':1,'group':group_id,'user':user_id});
    }

 removeUser(group_id:any,user_id:any){
        let path=`/users/groups/users/`;
        let url=this.authenticationService.getUrl(path);
        return this.authenticationService.post(url,{'action':2,'group':group_id,'user':user_id});
    }


    }