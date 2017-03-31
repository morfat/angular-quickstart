import { Component ,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GlobalService} from '../_globals/global.service';
import {User} from '../users/user';
import {UserService} from '../users/user.service';


@Component({
    templateUrl:'change-password.component.html',
    providers:[UserService],
    })
export class ChangePasswordComponent implements OnInit{
    
    user=new User();

    constructor(private router: Router,private userService:UserService,
                private globalService: GlobalService,
                ){}
    
    ngOnInit()
    {
        //this.user=this.globalService.getUser().user;
    }
    
 changePassword (){
        
     
        this.userService.changePassword({'old_password':this.user.old_password,
                                                   'new_password':this.user.new_password,
                                                   'new_password_again':this.user.new_password_again}).subscribe(
            response=>(this.globalService.displayResponseMessage(response),
            this.router.navigate(['/login'])),
         error=> (this.globalService.displayResponseMessage(error)));
        }
        
        
    
}

