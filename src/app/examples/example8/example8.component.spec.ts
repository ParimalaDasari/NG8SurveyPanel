import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example8Component } from './example8.component';

describe('Example8Component', () => {
  let component: Example8Component;
  let fixture: ComponentFixture<Example8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
