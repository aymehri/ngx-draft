import { Component, OnInit } from '@angular/core';
import { Promosport } from './../../shared/sdk/models/Promosport';
import { PromosportApi } from './../../shared/sdk/services/custom/Promosport';

@Component({
  selector: 'pm-promosport',
  templateUrl: './promosport.component.html',
  styleUrls: ['./promosport.component.scss']
})
export class PromosportComponent implements OnInit {

  public promosport: Promosport = new Promosport();
  public promosports: Array<Promosport>;

  constructor(private promosportApi: PromosportApi) { }

  ngOnInit() {
    this.promosportApi.find().subscribe((result: Array<Promosport>) => this.promosports = result);
  }

  submit(): void {
    this.promosportApi.replaceOrCreate(this.promosport).subscribe(
      (response: Promosport) => {
        this.promosports.push(response);
        this.promosport = new Promosport();
      },
      error => console.log('error')
    );
  }

}
