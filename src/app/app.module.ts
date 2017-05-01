import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppRoutesModule } from './app.routing';
import { UsersModule } from './users/users.module';



import { AppComponent }  from './app.component';
import { NotfoundComponent } from './notfound.component';
import { UsersComponent } from './users/users';

// AppRoutesModule needs to be put in last

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    UsersModule,
    AppRoutesModule
  ],
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
