import { Component ,OnInit} from '@angular/core';
import {GlobalService} from '../_globals/global.service';

import {UserService} from './user.service';
import {User} from './user';
import { environment } from '../../environments/environment';


@Component({
  selector: 'register-index',
  templateUrl: './register.component.html',
  providers:[UserService,],
 
})
export class RegisterComponent implements OnInit {
 
  constructor(private globalService:GlobalService,private userService:UserService){}

  user=new User();
  appName=environment.appName;


  ngOnInit(){
   
  }

  private createUser(){
   
   
    this.userService.createWithNoAuth(this.user).subscribe(
      response=>(this.globalService.displayResponseMessage(response),this.globalService.navigate(['/login'])),//success 
      error=>(this.globalService.displayResponseMessage(error)),//failure
      ()=>{}//complete 
      );//success,failure,complete;
    
  }

}
