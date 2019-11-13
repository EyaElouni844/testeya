import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part2tp3Component } from './part2tp3.component';

describe('Part2tp3Component', () => {
  let component: Part2tp3Component;
  let fixture: ComponentFixture<Part2tp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part2tp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part2tp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
