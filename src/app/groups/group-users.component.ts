import {Component,OnInit } from '@angular/core';

//Add the RxJS Observable operators we need in this app
import '../rxjs-operators';

import {Group} from './group';
import {Permission} from '../permissions/permission';

import {Observable} from 'rxjs/Rx';
import {GroupService} from './group.service';
import {UserService} from '../users/user.service';
import {User} from '../users/user';
import { GlobalService } from '../_globals/global.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';



@Component({
    
    selector:'group-users',
     styles:[`.selected {
    background-color: #337ab7; !important;
    color: white;}`
        ],
    templateUrl:'group-users.component.html',
    providers:[GroupService,UserService,GlobalService]
    })
export class GroupUsersComponent implements OnInit {
    group=new Group();
    users:User[];
    staffs:User[];
    user=new User();
    selectedUser=null;
    group_id=null;

    constructor(private groupService:GroupService,
                private userService:UserService,
                private globalService:GlobalService,
                private router:Router,
                private location:Location,
                private route:ActivatedRoute){}
    

      ngOnInit(){  
          //get permissions 
          this.route.params.subscribe((params: Params) => {this.group_id=params['id']});
          //this.group.id=group_id;
          this.getUsers();
          this.getStaffs();
          //this.groupId=group_id;
      }

getStaffs(){
    
        this.userService.getAllStaff().subscribe(
        response=>(this.staffs=response.data.results),
        error=> (error));
        }

getUsers(){
        this.userService.getAllByGroup(this.group_id).subscribe(
        response=>(this.users=response.data.results),
        error=> ((error))
           );
        }



    
   onSelectUser(user:any){
       this.selectedUser=user;
   }
    
 

addUser(){
    
        this.groupService.manageUsers(1,this.group_id,this.user.id).subscribe(
        response=>(this.globalService.hideModal("#addUserModal"),this.getUsers()),
         error=> (this.globalService.displayResponseMessage(error))
         );
        
}

removeUser(){
          this.groupService.manageUsers(2,this.group_id,this.user.id).subscribe(
        response=>(this.globalService.hideModal("#removeUserModal"),this.getUsers()),
         error=> (this.globalService.displayResponseMessage(error))
         );
}



    goBack():void{
        this.location.back();
    }
    
 }