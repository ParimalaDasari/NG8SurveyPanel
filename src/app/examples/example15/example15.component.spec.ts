import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example15Component } from './example15.component';

describe('Example15Component', () => {
  let component: Example15Component;
  let fixture: ComponentFixture<Example15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
