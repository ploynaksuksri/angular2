import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routing';

import { AppComponent }  from './app.component';
import { NotfoundComponent } from './notfound.component';
import { UsersComponent } from './users/users';



@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    HttpModule

      ],
  declarations: [
    AppComponent,
    NotfoundComponent,
    UsersComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
