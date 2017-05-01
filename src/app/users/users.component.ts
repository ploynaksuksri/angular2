import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User } from './user.service';

@Component({
  moduleId: module.id,
  selector: 'users',
  template:
`
  <div *ngIf="!users">
    Loading users
  </div>
  <div *ngIf="users">
    <div *ngFor="let user of users">
      <a (click)="onSelect(user)"
      [style.color]='getStyle(user)'>{{user.name}}</a>
    </div>
  </div>
`
})
export class UsersComponent implements OnInit{
  private users:User[];
  private selectedId:number;

  constructor(private router:Router,private _service:UserService){
  }

  ngOnInit(){
    this.getUsers();
  }

  getUsers():void{
    this._service.getUsers()
        .subscribe(users => {
          this.users = users;
        });
  }

  onSelect(user:User){
    this.selectedId = user.id;
    this.router.navigate(['user', user.id]);
  }

  isSelected(user:User){
     return user.id === this.selectedId;
  }

  getStyle(user:User){
    if (this.isSelected(user)){
      return 'red';
    }
    else{
      return '';
    }

  }


}
