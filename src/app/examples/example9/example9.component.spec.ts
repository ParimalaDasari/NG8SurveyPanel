import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example9Component } from './example9.component';

describe('Example9Component', () => {
  let component: Example9Component;
  let fixture: ComponentFixture<Example9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
