import { PromosportApi } from './../../shared/sdk/services/custom/Promosport';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromosportComponent } from './promosport.component';
import 'rxjs/add/observable/of';

const promosportApiStub = {
  find(){
    return Observable.of(undefined);
  }
};

describe('PromosportComponent', () => {
  let component: PromosportComponent;
  let fixture: ComponentFixture<PromosportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PromosportComponent],
      providers: [
        { provide: PromosportApi, useValue: promosportApiStub }
      ],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromosportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
