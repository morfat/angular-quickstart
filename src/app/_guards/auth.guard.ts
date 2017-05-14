import {Injectable} from '@angular/core';
import {Router,CanActivate} from '@angular/router';
import {GlobalService} from '../_globals/global.service';

import {environment} from  '../../environments/environment';


@Injectable()
export class AuthGuard implements CanActivate{
     
  constructor(private globalService:GlobalService,private router: Router){}
 
 

    canActivate(){
        if (this.globalService.getUser()){
            //logged in so return true
            return true;
            }
        //not logged in so redirect to login page
        this.router.navigate([environment.appLoginUrl]);
        return false;
        }
    }
