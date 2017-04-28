import { MatchComponent } from './match/match.component';
import { PromosportComponent } from './promosport/promosport.component';
import { TeamsComponent } from './teams/teams.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'promosports',
    component: PromosportComponent
  },
  {
    path: 'matches',
    component: MatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule { }
