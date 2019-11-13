import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part1tp3Component } from './part1tp3.component';

describe('Part1tp3Component', () => {
  let component: Part1tp3Component;
  let fixture: ComponentFixture<Part1tp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part1tp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part1tp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
