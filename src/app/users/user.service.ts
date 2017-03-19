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


       
}
