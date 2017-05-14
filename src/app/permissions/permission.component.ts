import { Component ,OnInit} from '@angular/core';
import {GlobalService} from '../_globals/global.service';

import {PermissionService} from './permission.service';
import {ContentTypeService} from '../content_types/content_type.service';
import {Permission} from './permission';

@Component({
  selector: 'permission-index',
  templateUrl: './permission.component.html',
  providers:[PermissionService,ContentTypeService],
  //styleUrls: ['./.component.css']
})
export class PermissionListComponent implements OnInit {
 
  constructor(private globalService:GlobalService,
              private permissionService:PermissionService,
              private contentTypeService:ContentTypeService){}
  //set 
  permissions:Permission[];
  permission=new Permission();
  selectedPermission=null;
  contentTypes=null;


  //needed for pagination 
  pagination:any;
  onPagination(results:any){
    //get results paginated from pagination component 
    this.permissions=results;
  }

  ngOnInit(){
   
    this.listContentTypes();

    // this.listPermissions();
   
  }

   private  onSelectPermission(g){
    this.selectedPermission=g;
  }


protected getContentType(content_type_id){
  //get from listed content types 
  
  let ct=this.contentTypes.filter(ct=>ct.id===content_type_id)[0];
  //console.log(this.contentTypes.filter(ct=>ct.id===content_type_id));
  return ct.app_label+'.'+ct.model;
}

  public listPermissions(){
    this.permissionService.getAll().subscribe(
      response=>(this.permissions=response.data.results,this.pagination=response.data.pagination,this.globalService.displayResponseMessage(response)),//success 
      error=>(this.globalService.displayResponseMessage(error)),//failure
      ()=>{}//complete 
      );//success,failure,complete

  }




  private createPermission(){
    console.log(this.permission);

    this.permissionService.create(this.permission).subscribe(
      response=>(this.globalService.hideModal("#createPermissionModal"),this.listPermissions()),//success 
      error=>(this.globalService.displayResponseMessage(error)),//failure
      ()=>{}//complete 
      );//success,failure,complete;
    
  }


 

  private editPermission(){
    this.permissionService.edit(this.selectedPermission).subscribe(
      response=>(this.globalService.hideModal("#editPermissionModal"),this.globalService.displayResponseMessage(response)),//success 
      error=>(this.globalService.displayResponseMessage(error)),//failure
      ()=>{}//complete 
      );//success,failure,complete;
    
  }


   private deletePermission(){
    this.permissionService.delete(this.selectedPermission).subscribe(
      response=>(this.globalService.hideModal("#deletePermissionModal"),this.listPermissions()),//success 
      error=>(this.globalService.displayResponseMessage(error)),//failure
      ()=>{}//complete 
      );//success,failure,complete;
    
  }



  public listContentTypes(){
    //also list permissions after content types has loaded 
    this.contentTypeService.getAll().subscribe(
      response=>(this.contentTypes=response.data.results,this.listPermissions()),//success 
      error=>(this.globalService.displayResponseMessage(error)),//failure
      ()=>{}//complete 
      );//success,failure,complete

  }

  

}
