import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationWithoutButtonsComponent } from './notification-without-buttons.component';

describe('NotificationWithoutButtonsComponent', () => {
  let component: NotificationWithoutButtonsComponent;
  let fixture: ComponentFixture<NotificationWithoutButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationWithoutButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationWithoutButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
