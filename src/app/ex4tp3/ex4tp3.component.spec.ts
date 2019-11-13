import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4tp3Component } from './ex4tp3.component';

describe('Ex4tp3Component', () => {
  let component: Ex4tp3Component;
  let fixture: ComponentFixture<Ex4tp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex4tp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex4tp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
