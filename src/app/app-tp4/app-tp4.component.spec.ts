import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTp4Component } from './app-tp4.component';

describe('AppTp4Component', () => {
  let component: AppTp4Component;
  let fixture: ComponentFixture<AppTp4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTp4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
