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

  getUsers():Observable<User[]>{
    return this._http.get(this._url)
      .map(res => res.json());
  }

  getUser(id:number):Observable<User>{
    return this._http.get(this._url + '/' + id)
      .map(res => res.json());
  }

  updateUser(user:User){
    
  }

}


export class User{
  id: number;
  name: string;
  username: string;
  email: string;
  address:any;
  phone:string;
  website:string;
  company:any;
}
