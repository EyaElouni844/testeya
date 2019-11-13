import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1tp3Component } from './ex1tp3.component';

describe('Ex1tp3Component', () => {
  let component: Ex1tp3Component;
  let fixture: ComponentFixture<Ex1tp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex1tp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1tp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
