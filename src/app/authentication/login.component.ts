import { Component ,OnInit} from '@angular/core';
import {Auth} from './auth';
import {GlobalService} from '../_globals/global.service';


@Component({
  selector: 'login-index',
  templateUrl: './login.component.html',
  //styleUrls: ['./.component.css']
})
export class LoginIndexComponent implements OnInit{
  title = 'Login';
  
  auth=new Auth();

constructor(private globalService:GlobalService){}
  authenticate(){
  
  }

  ngOnInit(){

  }

}



    