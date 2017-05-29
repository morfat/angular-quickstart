/*
this is globally accessed for data 
*/

import {Injectable} from '@angular/core';


//import environment to use settings
import {environment} from  '../../environments/environment';

import {Http,Headers,Response,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {Router} from '@angular/router';


//needed for iosLoader.. 
declare var iosOverlay:any; //ios loaders 
declare var spinner:any;
declare var jQuery:any; //this is for jquery 

declare var notify:any; //notify(message_type,message_heading,message_content) as  message notifications plugin


@Injectable()
export class GlobalService{

 
 constructor(private http: Http,private router:Router){}
 
 private iosLoader; //for iosloader 


//display and hide modals
public showModal(identifier){
    // console.log("show modal is here");
    jQuery(identifier).modal("show");
}

public hideModal(identifier){
    //console.log("Close modal is here");
     jQuery(identifier).modal("hide");

}
//display loaders
   private showLoader(message='Processing .. '){ //display loader for process. can pass custom message 

      // console.log("show loader here");

   //hide any other loader before displaying this 
    if(this.iosLoader){
        this.iosLoader.hide();
    }
    //show loader 
   this.iosLoader=iosOverlay({
		text: message,
		duration: 6e9, //6000 seconds. 100 minutes . because no normal request will take more than 100 minutes to load. 
		spinner: spinner
	});
   }


public  displayResponseMessage(response:any){ //if show is false, no message is displayed. loaders can signifiy successful load.
    //processes response body from the API
    //assumes the standar api structure that appends status to the response body. status can be false,true or 0.
    if (response.status===true){
        //this is success message. 
         notify("success"," ",response.message);  
    }else if (response.status===0){
         notify("error"," ","Request failed. Please try again. or Check that Server is reachable.");  
    }
    else if (response.status===false){
         notify("error","  ",response.message);  
    }
    else if(response.status===500){
        notify("error"," ","Server Processing Error. Please contact admin if this persists.");  
    }
    else if(response.status===401){//token expired. 
        notify("warning"," ","Session Expired. Please login again.");
        this.router.navigate([environment.appLoginUrl]);

    }
    
    else if(response.status===400){//incorrect  json data format posted. 
           let  data = JSON.parse(response._body);
           let message=" ";
           if (data.message){message = message + data.message}
           if (data.data){data=data.data;}



           for (let key in data) {
                   let value = data[key];
                //console.log(data,key,value);

                  message = message + "<br>: "+key.replace('_'," ").toUpperCase()+"=> "+value;


              }



        notify("error"," ",message);
    }   
}


  /* make global functions here */
public setUser(user:any){
    localStorage.setItem('_'+environment.appCode+'User', JSON.stringify(user));
}

public getUser(){

    return JSON.parse(localStorage.getItem('_'+environment.appCode+'User'));
}

public clearUser(){

    return localStorage.removeItem('_'+environment.appCode+'User');
}



public navigate(url){
    //naviagte to url given 
    this.router.navigate(url)
}

public getUrl(val){
    //when given sub url, return absolute url for API
   return environment.apiUrl+val;
}

public getToken(){
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
        this.iosLoader.hide();//close the loading icon 
        return body || {};
    }

  public handleError(error:any){
        //display error
        //try see how to remove the below in future 
        //let errMsg=(error.message)? error.message:error.status ?
        //`${error.status}-${error.statusText}`: 'Server Error';  
        // console.log("hide  loader here");
        this.iosLoader.hide();//close the loading icon 
        return Observable.throw(error);
       
    }


/** global http methods are called here  */
//they also start and close the http loaders 
    public get(url:any){
        this.showLoader();
        return this.http.get(url,this.getOptions()).map(response=>this.extractData(response)).catch(error=>this.handleError(error));
    }
  
   public post(url:any,data:any){
        this.showLoader();
        return this.http.post(url,JSON.stringify(data),this.getOptions()
        ).map(response=>this.extractData(response)).catch(error=>this.handleError(error));
   }
         

public postWithNoAuth(url:any,data:any){
        this.showLoader();
        return this.http.post(url,JSON.stringify(data),new RequestOptions({headers:new  Headers({'Content-Type':'application/json',})})
        ).map(response=>this.extractData(response)).catch(error=>this.handleError(error));
   }

   
  public put(url:any,data:any){
         this.showLoader();
         return this.http.put(url,JSON.stringify(data),this.getOptions()
        ).map(response=>this.extractData(response)).catch(error=>this.handleError(error));
     }


  public patch(url:any,data:any){
         this.showLoader();
         return this.http.patch(url,JSON.stringify(data),this.getOptions()
        ).map(response=>this.extractData(response)).catch(error=>this.handleError(error));
     }

 public delete(url:any){
      this.showLoader();
      return this.http.delete(url,this.getOptions()).map(response=>this.extractData(response)).catch(error=>this.handleError(error));


}
}


