import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Promosport } from './../../models/promosport';

@Component({
  selector: 'pm-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public promosport: Promosport;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.promosport = this.route.snapshot.data['promosport'];
  }

}
