import { Component ,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GlobalService} from '../_globals/global.service';
import {User} from '../users/user';
import {UserService} from '../users/user.service';


@Component({
    templateUrl:'reset-password.component.html',
      providers:[UserService,],
    })
export class ResetPasswordComponent implements OnInit{

    user=new User();

    
   constructor(private router: Router,private userService:UserService,
                private globalService: GlobalService,
                ){}
    
    ngOnInit(){
        //reset login status
       // this.authenticationService.logout();
         
        }



    
 resetPassword (){
        
     
        this.userService.resetPassword({'email':this.user.email}).subscribe(
            response=>(this.globalService.displayResponseMessage(response),
            this.router.navigate(['/login'])),
         error=> (this.globalService.displayResponseMessage(error)));
        }


   

    }
        
    
    
