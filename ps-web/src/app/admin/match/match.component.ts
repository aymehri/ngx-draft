import { Component, OnInit } from '@angular/core';

import { Match } from './../../shared/sdk/models/Match';
import { Promosport } from './../../shared/sdk/models/Promosport';
import { LoopBackFilter } from './../../shared/sdk/models/BaseModels';
import { MatchApi } from './../../shared/sdk/services/custom/Match';
import { PromosportApi } from './../../shared/sdk/services/custom/Promosport';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'pm-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  promosports$: Observable<Array<Promosport>> = this.promosportApi.find();
  selectInputChange$ = new Subject<string>();
  matches$ = this.selectInputChange$.startWith('1').switchMap(id => this.matchApi.find({
    where: { promosportId: id },
    include: ['localTeam', 'visitorTeam']
  }));

  constructor(private promosportApi: PromosportApi, private matchApi: MatchApi) { }

  ngOnInit() {
  }

}
