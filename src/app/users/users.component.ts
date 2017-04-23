import { Component, OnInit } from '@angular/core';
import { UserService, IUser } from './user.service';

@Component({
  moduleId: module.id,
  selector: 'users',
  template:
`
  <div>
    <div *ngFor="let user of users">
      {{user.name}}
    </div>
  </div>
`,
  providers: [UserService]

})
export class UsersComponent implements OnInit{
  private users:IUser[];

  constructor(private _service:UserService){}

  ngOnInit(){
    this.getUsers();
  }

  getUsers():void{
    this._service.getUsers()
        .subscribe(users => {
          this.users = users;
        });
  }


}
