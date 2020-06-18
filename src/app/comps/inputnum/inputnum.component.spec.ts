import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputnumComponent } from './inputnum.component';

describe('InputnumComponent', () => {
  let component: InputnumComponent;
  let fixture: ComponentFixture<InputnumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputnumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputnumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
