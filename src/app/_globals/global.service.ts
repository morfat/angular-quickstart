/*
this is globally accessed for data 
*/

import {Injectable} from '@angular/core';

@Injectable()
export class GlobalService{

    private _baseUrl='http://localhost:8000';
    public setBaseUrl(url){
        this._baseUrl=url;
    }
    public getBaseUrl(){
        return this._baseUrl;
    }

}

