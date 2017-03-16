/*
this is globally accessed for data 
*/

import {Injectable} from '@angular/core';
import {User} from '../users/user';
import {Settings} from './settings';

@Injectable()
export class GlobalService{

  /* make global functions here */
public setUser(user:User){
    localStorage.setItem('_'+Settings.APP_NAME+'User', JSON.stringify(user));
}

public getUser(){
    return JSON.parse(localStorage.getItem('_'+Settings.APP_NAME+'User'));
}

}

