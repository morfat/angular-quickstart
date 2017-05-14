import { Component ,OnInit} from '@angular/core';
import {GlobalService} from '../_globals/global.service';



@Component({
  selector: 'dashboard-index',
  templateUrl: './dashboard.component.html',
  //styleUrls: ['./.component.css']
})
export class DashboardIndexComponent implements OnInit {
  title = 'Dashboard';

  constructor(private globalService:GlobalService){}

  ngOnInit(){
    console.log(this.globalService.getUser());
  
  }

}
