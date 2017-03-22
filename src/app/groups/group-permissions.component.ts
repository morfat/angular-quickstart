import {Component,OnInit } from '@angular/core';

//Add the RxJS Observable operators we need in this app
import '../rxjs-operators';

import {AclGroup,AclPermission} from './group';
import {Observable} from 'rxjs/Rx';
import {AclGroupService} from './group.service';
import { AuthenticationService } from '../authentication/authentication.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

declare var jQuery:any;
declare var notify:any; //notify(message_type,message_heading,message_content)



@Component({
    
    selector:'group-permissions',
     styles:[`.selected {
    background-color: #337ab7; !important;
    color: white;}`
        ],
    templateUrl:'group-permissions.component.html',
    providers:[AclGroupService,AuthenticationService]
    })
export class GroupPermissionsComponent implements OnInit {
    aclGroup=new AclGroup()
    aclPermission=new AclPermission()

    aclPermissions:AclPermission[];

    aclSelectedPermissions:AclPermission[];
    aclUnSelectedPermissions:AclPermission[];



  
    constructor(private aclGroupService:AclGroupService,
                private authenticationService:AuthenticationService,
                private router:Router,
                private location:Location,
                private route:ActivatedRoute){}
    

      ngOnInit(){  
          //get permissions 
          let group_id:any;
          
          this.route.params.subscribe((params: Params) => {group_id=params['id']});
          this.getSelectedPermissions(group_id);
          this.getUnSelectedPermissions(group_id);
          this.aclGroup.id=group_id;


      }


 
    

    
addPermissions(){//add permissions to those on right side from unselected 

    let keys=[];
     for (let p of this.aclGroup.unselectedPermissions){ //get permission ids 
       keys.push(p);
    }
   // console.log(keys);
    const toDelete= new Set(keys);//make ids unique

    //form new list of unselectedPermissions

    //this gets objects that are not select by click 
    const newArray = this.aclUnSelectedPermissions.filter(obj => !toDelete.has(obj.id));
    const selectedListArray = this.aclUnSelectedPermissions.filter(obj => toDelete.has(obj.id));
    console.log(newArray);
    this.aclUnSelectedPermissions=newArray; //use this as new list of unselectedPermissions
   

    for (let p of selectedListArray){ //append to selected 
        //console.log(p);
       this.aclSelectedPermissions.push(p);
    }


}

removePermissions(){//add permissions to those on right side from unselected 

    let keys=[];
     for (let p of this.aclGroup.selectedPermissions){ //get permission ids 
       keys.push(p);
    }
   // console.log(keys);
    const toDelete= new Set(keys);//make ids unique

    //form new list of unselectedPermissions

    //this gets objects that are not select by click 
    const newArray = this.aclSelectedPermissions.filter(obj => !toDelete.has(obj.id));
    const selectedListArray = this.aclSelectedPermissions.filter(obj => toDelete.has(obj.id));
    console.log(newArray);
    this.aclSelectedPermissions=newArray; //use this as new list of unselectedPermissions
   

    for (let p of selectedListArray){ //append to the left side of unselected 
        //console.log(p);
       this.aclUnSelectedPermissions.push(p);
    }


}

    onEditPermissions(){

        console.log(this.aclGroup,
        this.aclGroup.selectedPermissions,
        this.aclGroup.unselectedPermissions);

        this.aclGroup.permissions=[];

        for (let i of this.aclSelectedPermissions){
            //update permissions ids 
            //console.log(i,i.id);
            this.aclGroup.permissions.push(i.id);
        }

        
         this.authenticationService.showLoader();
         this.aclGroupService.updateGroup(this.aclGroup).subscribe(
       response=>(response.data,this.authenticationService.displaySuccessMessage(response)),
        error=> (this.authenticationService.displayErrors(error)));

    }
    getUnSelectedPermissions(group_id:any){
         this.authenticationService.showLoader();
        this.aclGroupService.getPermissions(group_id,'unselected').subscribe(
       response=>(this.aclUnSelectedPermissions=response.data.results,this.authenticationService.hideLoader()),
        error=> (this.authenticationService.displayErrors(error)));
        }
   
    getSelectedPermissions(group_id:any){
         this.authenticationService.showLoader();
        this.aclGroupService.getPermissions(group_id,'selected').subscribe(
       response=>(this.aclSelectedPermissions=response.data.results,this.authenticationService.hideLoader()),
        error=> (this.authenticationService.displayErrors(error)));
        }




    goBack():void{
        this.location.back();
    }
    
 }