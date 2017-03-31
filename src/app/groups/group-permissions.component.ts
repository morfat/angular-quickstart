import {Component,OnInit } from '@angular/core';

//Add the RxJS Observable operators we need in this app
import '../rxjs-operators';

import {Group} from './group';
import {Permission} from '../permissions/permission';
import {GroupService} from './group.service';
import {PermissionService} from '../permissions/permission.service';

import { GlobalService } from '../_globals/global.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';



@Component({
    
    selector:'group-permissions',
     styles:[`.selected {
    background-color: #337ab7; !important;
    color: white;}`
        ],
    templateUrl:'group-permissions.component.html',
    providers:[GroupService,GlobalService,PermissionService]
    })
export class GroupPermissionsComponent implements OnInit {
    group=new Group()
    permission=new Permission()

    permissions:Permission[];

    selectedPermissions:Permission[];
    unSelectedPermissions:Permission[];



  
    constructor(private groupService:GroupService,
                private globalService:GlobalService,
                private permissionService:PermissionService,
                private router:Router,
                private location:Location,
                private route:ActivatedRoute){}
    

      ngOnInit(){  
          //get permissions 
          let group_id:any;
          
          this.route.params.subscribe((params: Params) => {group_id=params['id']});
          this.getSelectedPermissions(group_id);
          this.getUnSelectedPermissions(group_id);
          this.group.id=group_id;


      }


 
    

    
addPermissions(){//add permissions to those on right side from unselected 

    let keys=[];
     for (let p of this.group.unselectedPermissions){ //get permission ids 
       keys.push(p);
    }
   // console.log(keys);
    const toDelete= new Set(keys);//make ids unique

    //form new list of unselectedPermissions

    //this gets objects that are not select by click 
    const newArray = this.unSelectedPermissions.filter(obj => !toDelete.has(obj.id));
    const selectedListArray = this.unSelectedPermissions.filter(obj => toDelete.has(obj.id));
    console.log(newArray);
    this.unSelectedPermissions=newArray; //use this as new list of unselectedPermissions
   

    for (let p of selectedListArray){ //append to selected 
        //console.log(p);
       this.selectedPermissions.push(p);
    }


}


removePermissions(){//add permissions to those on right side from unselected 

    let keys=[];
     for (let p of this.group.selectedPermissions){ //get permission ids 
       keys.push(p);
    }
   // console.log(keys);
    const toDelete= new Set(keys);//make ids unique

    //form new list of unselectedPermissions

    //this gets objects that are not select by click 
    const newArray = this.selectedPermissions.filter(obj => !toDelete.has(obj.id));
    const selectedListArray = this.selectedPermissions.filter(obj => toDelete.has(obj.id));
    console.log(newArray);
    this.selectedPermissions=newArray; //use this as new list of unselectedPermissions
   

    for (let p of selectedListArray){ //append to the left side of unselected 
        //console.log(p);
       this.unSelectedPermissions.push(p);
    }


}

    onEditPermissions(){

        
        this.group.permissions=[];

        for (let i of this.selectedPermissions){
            //update permissions ids 
            //console.log(i,i.id);
            this.group.permissions.push(i.id);
        }

    
    //if not works use , patch 

         this.groupService.patch(this.group).subscribe(
       response=>(response.data),
        error=> (error));

    }
    getUnSelectedPermissions(group_id:any){
        
        this.permissionService.getGroupPermissions(group_id,'unassigned').subscribe(
       response=>(this.unSelectedPermissions=response.data.results),
        error=> (error));
        }
   
    getSelectedPermissions(group_id:any){
        
        this.permissionService.getGroupPermissions(group_id,'assigned').subscribe(
       response=>(this.selectedPermissions=response.data.results),
        error=> (error));
        }

    goBack():void{
        this.location.back();
    }
    
 }