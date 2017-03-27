import {Component,OnInit } from '@angular/core';

//Add the RxJS Observable operators we need in this app
import '../rxjs-operators';

import {AclGroup,AclPermission,Employee} from './group';
import {Observable} from 'rxjs/Rx';
import {AclGroupService} from './group.service';
import {UserService} from '../users/user.service';
import {User} from '../users/user';
import { AuthenticationService } from '../authentication/authentication.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

declare var jQuery:any;
declare var notify:any; //notify(message_type,message_heading,message_content)



@Component({
    
    selector:'group-users',
     styles:[`.selected {
    background-color: #337ab7; !important;
    color: white;}`
        ],
    templateUrl:'group-users.component.html',
    providers:[AclGroupService,UserService,AuthenticationService]
    })
export class GroupUsersComponent implements OnInit {
    aclGroup=new AclGroup()
     users:User[];
     employees:Employee[];
     employee=new Employee();

   
   selectedUser=null;
   groupId=null;
  

  
    constructor(private aclGroupService:AclGroupService,
                private userService:UserService,
                private authenticationService:AuthenticationService,
                private router:Router,
                private location:Location,
                private route:ActivatedRoute){}
    

      ngOnInit(){  
          //get permissions 
          let group_id:any;
          
          this.route.params.subscribe((params: Params) => {group_id=params['id']});
          
          this.aclGroup.id=group_id;
          this.getUsers(group_id);
          this.getEmployees();
          this.groupId=group_id;



      }

getEmployees(){
    //return only jhl users 
     this.authenticationService.showLoader();

        this.userService.getEmployees().subscribe(
        response=>(this.employees=response.data.results,this.authenticationService.displaySuccessMessage(response)),
        error=> (this.authenticationService.displayErrors(error))
           );
        }

getUsers(group:any){
        this.userService.getGroupUsers(group).subscribe(
        response=>(this.users=response.data.results),
        error=> (this.authenticationService.displayErrors(error))
           );
        }


   //jquery
    showAddUserModal(){
        jQuery("#addUserModal").modal("show");
        }
    
   onSelectUser(user:any){
       this.selectedUser=user;
   }
    
    //jquery
    showRemoveUserModal(){
        jQuery("#removeUserModal").modal("show");
        }


onAddUser(){
     this.authenticationService.showLoader();
      
        this.aclGroupService.addUser(this.groupId,this.employee.id).subscribe(
        response=>(this.getUsers(this.groupId),
         jQuery("#addUserModal").modal("hide"),
        this.authenticationService.displaySuccessMessage(response)),
         error=> (this.authenticationService.displayErrors(error))
         );
        
    }
 
      onRemoveUser(){
           this.authenticationService.showLoader();
        //delete selected item
        this.aclGroupService.removeUser(this.groupId,this.selectedUser.id).subscribe(
        (response)=>(this.getUsers(this.groupId),jQuery("#removeUserModal").modal("hide"),
        this.authenticationService.displaySuccessMessage(response)),
            error=> (this.authenticationService.displayErrors(error))
        );
        
        }


    goBack():void{
        this.location.back();
    }
    
 }