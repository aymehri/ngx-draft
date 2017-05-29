import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/security/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'create',
    loadChildren: './create/create.module#CreateModule'
  },
  {
    path: 'results',
    loadChildren: './results/results.module#ResultsModule'
  },
  {
    path: 'admin',
    canActivate: [ AuthGuard ],
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
