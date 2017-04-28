import { Observable } from 'rxjs/Observable';
import { PromosportApi } from './../shared/sdk/services/custom/Promosport';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ResultsComponent } from './results.component';
import 'rxjs/add/observable/of';

const promosportApiStub = {
  find(){
    return Observable.of(undefined);
  }
};

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsComponent ],
      providers: [
        { provide: PromosportApi, useValue: promosportApiStub }
      ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
