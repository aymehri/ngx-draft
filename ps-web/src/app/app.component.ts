import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';


let navigator: any;
let window: any;

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  online$: Observable<boolean>;

  title = 'pm works!';

  constructor() {
  this.online$ = Observable.merge(
    Observable.of(navigator.onLine),
    Observable.fromEvent(window, 'online').map(() => true),
    Observable.fromEvent(window, 'offline').map(() => false)
  )
}
}
