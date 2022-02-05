import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example16Component } from './example16.component';

describe('Example16Component', () => {
  let component: Example16Component;
  let fixture: ComponentFixture<Example16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
