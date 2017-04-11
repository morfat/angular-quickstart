import { Component ,OnInit} from '@angular/core';
import {Auth} from './auth';
import {AuthenticationService} from './authentication.service';
import {GlobalService} from '../_globals/global.service';

import { environment } from '../../environments/environment';


@Component({
  selector: 'login-index',
  templateUrl: './login.component.html',
  providers:[AuthenticationService,],
  //styleUrls: ['./.component.css']
})
export class LoginIndexComponent implements OnInit{
  title = 'Login';
  
  auth=new Auth();
  appName=environment.appName;
  

constructor(private authenticationService:AuthenticationService,private globalService:GlobalService){}



  authenticate(){
      this.authenticationService.login(this.auth).subscribe(
        response=>(this.authenticationService.handleLogin(response)),
        error=>(this.globalService.displayResponseMessage(error)));
  
  }

  ngOnInit(){
    //clear user storage/ logout 
    this.authenticationService.logout();


  }

}



    