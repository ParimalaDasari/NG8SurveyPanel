import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example14Component } from './example14.component';

describe('Example14Component', () => {
  let component: Example14Component;
  let fixture: ComponentFixture<Example14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
