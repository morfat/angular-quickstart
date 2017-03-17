import { Component } from '@angular/core';
import {GlobalService} from '../_globals/global.service';

@Component({
  selector: 'header-navigation',
  templateUrl: './header.component.html',
  
})
export class HeaderComponent {

    constructor(private globalService:GlobalService){}
 
 
  title = 'Dashboard';
}
