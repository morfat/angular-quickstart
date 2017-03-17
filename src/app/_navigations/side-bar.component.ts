import { Component,OnInit } from '@angular/core';
import {GlobalService} from '../_globals/global.service';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  
})
export class SideBarComponent implements OnInit {

  constructor(private globalService:GlobalService){}
 
 ngOnInit(){

 }
}
