import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2tp3Component } from './ex2tp3.component';

describe('Ex2tp3Component', () => {
  let component: Ex2tp3Component;
  let fixture: ComponentFixture<Ex2tp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex2tp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2tp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
