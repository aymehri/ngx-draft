import { Component, OnInit } from '@angular/core';
import { Promosport } from './../models/promosport';
import { PromosportApi } from './../shared/sdk/services/custom/Promosport';

@Component({
  selector: 'pm-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  public promosports: Promosport[];

  constructor(private promosportApi: PromosportApi) { }

  ngOnInit() {
    this.promosportApi
      .find()
      .subscribe((res: Promosport[]) => this.promosports = res);
  }

}
