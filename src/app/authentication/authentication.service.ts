import { Injectable } from '@angular/core';
import {GlobalService} from '../_globals/global.service';
import {Auth} from './auth';

import {Observable} from 'rxjs/Observable';


@Injectable()
export class AuthenticationService{

    constructor(private globalService:GlobalService){}

    private authenticationUrl=this.globalService.getUrl('/authenticate/');

  login(auth:Auth):Observable<any>{
      //login to api.
      return this.globalService.post(this.authenticationUrl,auth);
    
  }
    

handleLogin(response:any){
    //login successful if there's a jwt token in the response
            if (response){
                //set user to storage

                this.globalService.setUser(response);

                console.log(this.globalService.getUser());

               if (!this.globalService.getUser().user.is_password_changed){ 
                   this.globalService.navigate(['/users','change-password']);
                }else{
                      this.globalService.navigate(['/dashboard']);
                }
            }
   }


       
}
