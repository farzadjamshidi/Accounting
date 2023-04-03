import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditGroupComponent } from './create-edit-group.component';

describe('CreateEditGroupComponent', () =>
{
  let component: CreateEditGroupComponent;
  let fixture: ComponentFixture<CreateEditGroupComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [CreateEditGroupComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateEditGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
