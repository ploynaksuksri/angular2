import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { urls } from '../services';

@Injectable()
export class UserService{
  private _url:string;
  constructor(private _http:Http){
    this._url = urls.users;
  }

  getUsers():Observable<IUser[]>{
    return this._http.get(this._url)
      .map(res => res.json());
  }

  
}


export interface IUser{
  id: number,
  name: string,
  username: string,
  email: string,
  address:any,
  phone:string,
  website:string,
  company:any
}
