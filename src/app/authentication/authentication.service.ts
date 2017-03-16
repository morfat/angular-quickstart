import { Injectable } from '@angular/core';
import {GlobalService} from '../_globals/global.service';
import {Auth} from './auth';


@Injectable()
export class AuthenticationService{

    constructor(private globalService:GlobalService){}

    private authenticationUrl=this.globalService.getUrl('/authenticate/');

  login(auth:Auth){
      //login to api.
      console.log(this.authenticationUrl);
    
  }
    
       
}
