import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TeamsComponent } from './teams/teams.component';
import { PromosportComponent } from './promosport/promosport.component';
import { MatchComponent } from './match/match.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [AdminComponent, TeamsComponent, PromosportComponent, MatchComponent]
})
export class AdminModule { }
