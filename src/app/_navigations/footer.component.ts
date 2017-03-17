import { Component } from '@angular/core';
import {GlobalService} from '../_globals/global.service';

@Component({
  selector: 'footer-navigation',
  templateUrl: './footer.component.html',
  
})
export class FooterComponent {
    constructor(private globalService:GlobalService){}
 
 
}
