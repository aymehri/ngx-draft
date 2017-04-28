import { MatchApi } from './../../shared/sdk/services/custom/Match';
import { Observable } from 'rxjs/Observable';
import { PromosportApi } from './../../shared/sdk/services/custom/Promosport';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchComponent } from './match.component';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';

const promosportApiStub = {
  find(){
    return Observable.of(undefined);
  }
};

const matchApiStub = {
  find(){
    return Observable.of(undefined);
  }
};

describe('MatchComponent', () => {
  let component: MatchComponent;
  let fixture: ComponentFixture<MatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchComponent ],
      providers: [
        { provide: PromosportApi, useValue: promosportApiStub },
        { provide: MatchApi, useValue: matchApiStub }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
