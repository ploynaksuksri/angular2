import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersRoutesModule } from './users.routing';

import { UsersComponent } from './users.component';
import { UserComponent } from './user.component';
import { UserService } from './user.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    UsersRoutesModule
      ],
  declarations: [
    UsersComponent,
    UserComponent
  ],
  providers: [
    UserService
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
