import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4tp3meComponent } from './ex4tp3me.component';

describe('Ex4tp3meComponent', () => {
  let component: Ex4tp3meComponent;
  let fixture: ComponentFixture<Ex4tp3meComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex4tp3meComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex4tp3meComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
