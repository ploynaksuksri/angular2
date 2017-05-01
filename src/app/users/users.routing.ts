import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserComponent } from'./user.component';

const usersRouting: Routes = [
  {path:'users', component: UsersComponent },
  {path:'user/:id', component: UserComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(usersRouting)
  ],
  exports:[RouterModule]
})
export class UsersRoutesModule {}
