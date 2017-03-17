/*
this is globally accessed for data 
*/

import {Injectable} from '@angular/core';

import {Settings} from './settings';

import {Http,Headers,Response,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {Router} from '@angular/router';



@Injectable()
export class GlobalService{


 constructor(private http: Http,private router:Router){}

  /* make global functions here */
public setUser(user:any){
    localStorage.setItem('_'+Settings.APP_NAME+'User', JSON.stringify(user));
}

public getUser(){

    return JSON.parse(localStorage.getItem('_'+Settings.APP_NAME+'User'));
}

public clearUser(){

    return localStorage.removeItem('_'+Settings.APP_NAME+'User');
}



public navigate(url){
    //naviagte to url given 
    this.router.navigate(url)
}

public getUrl(val){
    //when given sub url, return absolute url for API
   return Settings.BASE_API_URL+val;
}

    getToken(){
        if(this.getUser()){
            return this.getUser().token;

        }
        }
        
    
    
/* global functions */
  

  public getOptions(){  //get options, set headers 
      return new RequestOptions({headers:new  Headers({'Content-Type':'application/json',
                                   'Authorization': 'Token '+ this.getToken()
                                })});
  }

 private extractData(res: Response){ //this alos closes the loaders ios 
        let body=res.json(); 
        return body || {};
    }

  public handleError(error:any){
        //display error
        //try see how to remove the below in future 
        let errMsg=(error.message)? error.message:error.status ?
        `${error.status}-${error.statusText}`: 'Server Error';  
        return Observable.throw(error);
    }

    public get(url:any){
        return this.http.get(url,this.getOptions()).map(this.extractData).catch(this.handleError);
    }
  
   public post(url:any,data:any){
        return this.http.post(url,JSON.stringify(data),this.getOptions()
        ).map(this.extractData).catch(this.handleError);
   }
         
  public put(url:any,data:any){
         return this.http.put(url,JSON.stringify(data),this.getOptions()
        ).map(this.extractData).catch(this.handleError);
     }


  public patch(url:any,data:any){
         return this.http.patch(url,JSON.stringify(data),this.getOptions()
        ).map(this.extractData).catch(this.handleError);
     }

 public delete(url:any){
      return this.http.delete(url,this.getOptions()).catch(this.handleError);
 }


}

