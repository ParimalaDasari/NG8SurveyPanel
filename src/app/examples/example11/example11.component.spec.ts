import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example11Component } from './example11.component';

describe('Example11Component', () => {
  let component: Example11Component;
  let fixture: ComponentFixture<Example11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
