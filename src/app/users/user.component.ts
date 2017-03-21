import { Component ,OnInit} from '@angular/core';
import {GlobalService} from '../_globals/global.service';
import {Settings} from '../_globals/settings';

import {UserService} from './user.service';
import {User} from './user';

@Component({
  selector: 'user-index',
  templateUrl: './user.component.html',
  providers:[UserService,],
  //styleUrls: ['./.component.css']
  //styles:[` .selected {
   // background-color: #337ab7 !important;
    //color: white;}`],
})
export class UserListComponent implements OnInit {
 
  constructor(private globalService:GlobalService,private userService:UserService){}
  //set 
  users:User[];
  user=new User();
  private selectedUser=null;

  //needed for pagination 
  pagination:any;
  onPagination(results:any){
    //get results paginated from pagination component 
    this.users=results;
  }

  ngOnInit(){
    this.listUsers();
   
  }

  public listUsers(){
    this.userService.getAll().subscribe(
      response=>(this.users=response.data.results,this.pagination=response.data.pagination,this.globalService.displayResponseMessage(response)),//success 
      error=>(this.globalService.displayResponseMessage(error)),//failure
      ()=>{}//complete 
      );//success,failure,complete

  }

  private  onSelectUser(u){
    this.selectedUser=u;
  }

}
