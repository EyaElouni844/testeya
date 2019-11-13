import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3tp3Component } from './ex3tp3.component';

describe('Ex3tp3Component', () => {
  let component: Ex3tp3Component;
  let fixture: ComponentFixture<Ex3tp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex3tp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3tp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
