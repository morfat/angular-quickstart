import {Component,OnInit } from '@angular/core';

//Add the RxJS Observable operators we need in this app
import '../rxjs-operators';
import {AclGroup} from './group';
import {Observable} from 'rxjs/Rx';
import {AclGroupService} from './group.service';
import { Subject }          from 'rxjs/Subject';
import { AuthenticationService } from '../authentication/authentication.service';
import {Router} from '@angular/router';

declare var jQuery:any;
declare var notify:any; //notify(message_type,message_heading,message_content)


@Component({
    //moduleId:module.id,
    selector:'acl-group-list',
    styles:[`.selected {
    background-color: #337ab7; !important;
    color: white;}`
        ],
    templateUrl:'group.component.html',
    providers:[AclGroupService,AuthenticationService]
    })
export class AclGroupListComponent implements OnInit {

   selectedAclGroup=null;
   aclGroups:AclGroup[];
   aclGroup=new AclGroup();


  constructor(private aclGroupService:AclGroupService,
                private authenticationService:AuthenticationService,
                private router:Router){}
    

    ngOnInit(){  
          this.getAclGroups();
        
      }
    
     //jquery
    showCreateGroupModal(){
        jQuery("#createGroupModal").modal("show");
        }
    
     //jquery
    showEditGroupModal(){
        jQuery("#editGroupModal").modal("show");
        }
    
    //jquery
    showDeleteGroupModal(){
        jQuery("#deleteGroupModal").modal("show");
        }

    onSelectAclGroup(business:AclGroup){
        this.selectedAclGroup=business;
        }
    

    getAclGroups(){
         this.authenticationService.showLoader();
        this.aclGroupService.getAclGroups().subscribe(
       response=>(this.aclGroups=response.data.results,this.authenticationService.displaySuccessMessage(response)),
       error=> (this.authenticationService.displayErrors(error))
           );
        }

  onCreateGroup(){
       this.authenticationService.showLoader();
      
        this.aclGroupService.createGroup(this.aclGroup).subscribe(
        response=>(this.aclGroups.push(response.data),
         jQuery("#createGroupModal").modal("hide"),
         this.authenticationService.displaySuccessMessage(response)),
         error=> (this.authenticationService.displayErrors(error))
         );
        
    }

 onEditGroup(){
      this.authenticationService.showLoader();
        
        this.aclGroupService.updateGroup(this.selectedAclGroup).subscribe(
           response=>(jQuery("#editGroupModal").modal("hide"),
           this.authenticationService.displaySuccessMessage(response),this.getAclGroups(),
             this.selectedAclGroup=null),
        error=> (this.authenticationService.displayErrors(error))
        
         );
        
       
        }
    
      onDeleteGroup(){
        //delete selected item
         this.authenticationService.showLoader();
        this.aclGroupService.deleteGroup(this.selectedAclGroup).subscribe(
        (response)=>(this.getAclGroups(),jQuery("#deleteGroupModal").modal("hide"),
        this.authenticationService.displaySuccessMessage(response)),
            error=> (this.authenticationService.displayErrors(error))
        );
        
        }

    
 }