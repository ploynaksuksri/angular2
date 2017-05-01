import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import  { Subscription } from 'rxjs/Subscription';
import { UserService, User } from './user.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  template: `
  <div *ngIf="!user.id">
    {{waitingMessage}}
  </div>
  <div *ngIf="user.id">
    <a (click)="goToUsers()">Back to users</a>
    <div style="margin-top:20px;">
      <p>Name: {{user.name}}</p>
      <p>Email: {{user.email}}</p>
    </div>

    <div>
      <form [formGroup]="userForm">
      <div>
        <label>Name
          <input type="text"
            formControlName="name"
            [(ngModel)]="user.name">
        </label>
      </div>
      <div>
        <label>email
          <input type="text"
            formControlName="email"
            [(ngModel)]="user.email">
        </label>
      </div>
      </form>
    </div>

  </div>

  `,
})
export class UserComponent implements OnInit, OnDestroy{
  private user:User;
  private userForm:FormGroup;
  private subscription:Subscription;
  private waitingMessage:string = "Loading user";

  constructor(
    private _fb:FormBuilder,
    private _router:Router,
    private _activatedRouter:ActivatedRoute,
    private _service:UserService){}

  ngOnInit(){
    this.user = new User();
    let id:number;
    this.subscription = this._activatedRouter.params
      .subscribe(params => {
        id = +params["id"];
        this.getUser(id);
    });


    this.createUserForm();

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  getUser(id:number){
    this._service.getUser(id)
      .subscribe(user => {
        this.user = user;
        this.userForm.setValue({
          name: this.user.name,
          email:this.user.email
        });
      } );


  }

  createUserForm(){
    this.userForm = this._fb.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email, Validators.required]
    });
  }



  goToUsers():void{
    this._router.navigate(['/users']);
  }
}
