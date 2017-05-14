import { Injectable } from '@angular/core';
import {GlobalService} from '../_globals/global.service';
import {Auth} from './auth';

import {Observable} from 'rxjs/Observable';
import {environment} from  '../../environments/environment';


@Injectable()
export class AuthenticationService{

    constructor(private globalService:GlobalService){}

    private authenticationUrl=this.globalService.getUrl('/authenticate/');

  login(auth:Auth):Observable<any>{
      //login to api.
      return this.globalService.post(this.authenticationUrl,auth);
    
  }
    
    logout(){

         return this.globalService.clearUser();

    }

handleLogin(response:any){
    //login successful if there's a jwt token in the response
            if (response){
                //set user to storage
                this.globalService.setUser(response);
               
               if (!this.globalService.getUser().user.is_staff || !this.globalService.getUser().user.is_superuser){ 
                   this.globalService.clearUser();
                   this.globalService.navigate([environment.appLoginUrl]);
                }

               else if (!this.globalService.getUser().user.is_password_changed){ 
                   this.globalService.navigate(['/change-password']);
                }
                else{
                      this.globalService.navigate(['/dashboard']);
                }
            }
   }



       
}
