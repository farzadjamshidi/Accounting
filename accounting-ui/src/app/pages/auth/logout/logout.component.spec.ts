import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutPageComponent } from './logout.component';

describe('LogoutPageComponent', () =>
{
  let component: LogoutPageComponent;
  let fixture: ComponentFixture<LogoutPageComponent>;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      declarations: [LogoutPageComponent]
    });
    fixture = TestBed.createComponent(LogoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
