import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example10Component } from './example10.component';

describe('Example10Component', () => {
  let component: Example10Component;
  let fixture: ComponentFixture<Example10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
