import { Component ,OnInit} from '@angular/core';
import {Auth} from './auth';
@Component({
  selector: 'login-index',
  templateUrl: './login.component.html',
  //styleUrls: ['./.component.css']
})
export class LoginIndexComponent implements OnInit{
  title = 'Login';
  
  auth=new Auth();

  authenticate(){
    console.log(this.auth);

  }

  ngOnInit(){

  }

}



    