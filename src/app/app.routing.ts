import { Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { NotfoundComponent } from './notfound.component';

export const appRoutes:Routes = [
  {path: 'users', component: UsersComponent},
  {path: '**', component: NotfoundComponent},
  {path: '',   redirectTo: '/users', pathMatch: 'full'}
];
