
import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { NotfoundComponent } from './notfound.component';

const appRoutes:Routes = [
  {path: '',   redirectTo: '/users', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutesModule{

}
