import { Component ,OnInit} from '@angular/core';
import {GlobalService} from '../_globals/global.service';
import {Settings} from '../_globals/settings';

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

  ngOnInit(){
    this.listGroups();
   
  }

  public listGroups(){
    this.groupService.getAll().subscribe(response=>(this.groups=response.data.results),error=>(error));
  }

}
