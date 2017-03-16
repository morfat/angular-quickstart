import { Component ,OnInit} from '@angular/core';
import {Auth} from './auth';
import {AuthenticationService} from './authentication.service';


@Component({
  selector: 'login-index',
  templateUrl: './login.component.html',
  providers:[AuthenticationService,],
  //styleUrls: ['./.component.css']
})
export class LoginIndexComponent implements OnInit{
  title = 'Login';
  
  auth=new Auth();

constructor(private authenticationService:AuthenticationService){}



  authenticate(){
      this.authenticationService.login(this.auth).subscribe(response=>(this.authenticationService.handleLogin(response)),error=>(error));
  
  }

  ngOnInit(){

  }

}



    