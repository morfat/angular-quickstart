import { Component } from '@angular/core';
import {GlobalService} from '../_globals/global.service';

import { environment } from '../../environments/environment';


@Component({
  selector: 'header-navigation',
  templateUrl: './header.component.html',
  
})
export class HeaderComponent {

    constructor(private globalService:GlobalService){}

    appName=environment.appName;
    
 
 
  title = 'Dashboard';
}
