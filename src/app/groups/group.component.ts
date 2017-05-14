import { Component ,OnInit} from '@angular/core';
import {GlobalService} from '../_globals/global.service';

import {GroupService} from './group.service';
import {Group} from './group';

@Component({
  selector: 'group-index',
  templateUrl: './group.component.html',
  providers:[GroupService,],
  //styleUrls: ['./.component.css']
})
export class GroupListComponent implements OnInit {
 
  constructor(private globalService:GlobalService,private groupService:GroupService){}
  //set 
  groups:Group[];
  group=new Group();
  selectedGroup=null;

  //needed for pagination 
  pagination:any;
  onPagination(results:any){
    //get results paginated from pagination component 
    this.groups=results;
  }

  ngOnInit(){
    this.listGroups();
   
  }

   private  onSelectGroup(g){
    this.selectedGroup=g;
  }



  public listGroups(){
    this.groupService.getAll().subscribe(
      response=>(this.groups=response.data.results,this.pagination=response.data.pagination,this.globalService.displayResponseMessage(response)),//success 
      error=>(this.globalService.displayResponseMessage(error)),//failure
      ()=>{}//complete 
      );//success,failure,complete

  }



  private createGroup(){
    console.log(this.group);

    
   
    this.groupService.create(this.group).subscribe(
      response=>(this.globalService.hideModal("#createGroupModal"),this.listGroups()),//success 
      error=>(this.globalService.displayResponseMessage(error)),//failure
      ()=>{}//complete 
      );//success,failure,complete;
    
  }


 

  private editGroup(){
    this.groupService.edit(this.selectedGroup).subscribe(
      response=>(this.globalService.hideModal("#editGroupModal"),this.globalService.displayResponseMessage(response)),//success 
      error=>(this.globalService.displayResponseMessage(error)),//failure
      ()=>{}//complete 
      );//success,failure,complete;
    
  }


   private deleteGroup(){
    this.groupService.delete(this.selectedGroup).subscribe(
      response=>(this.globalService.hideModal("#deleteGroupModal"),this.listGroups()),//success 
      error=>(this.globalService.displayResponseMessage(error)),//failure
      ()=>{}//complete 
      );//success,failure,complete;
    
  }
  

}
