import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Team } from './../../shared/sdk/models/Team';
import { TeamApi } from './../../shared/sdk/services/custom/Team';

@Component({
  selector: 'pm-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  public team: Team = new Team();
  public teams: Array<Team>;

  constructor(private teamApi: TeamApi) { }

  ngOnInit(): void {
    this.teamApi.find().subscribe((result: Array<Team>) => this.teams = result);
  }

  submit(teamForm: NgForm): void {
    this.teamApi.replaceOrCreate(this.team).subscribe(
      (response: Team) => {
        this.teams.push(response);
        this.team = new Team();
        teamForm.reset();
      },
      error => console.log('error')
    );
  }

}
