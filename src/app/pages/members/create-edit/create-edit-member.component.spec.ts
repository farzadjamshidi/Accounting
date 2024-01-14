import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditMemberComponent } from './create-edit-member.component';

describe('CreateEditMemberComponent', () =>
{
  let component: CreateEditMemberComponent;
  let fixture: ComponentFixture<CreateEditMemberComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [CreateEditMemberComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateEditMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
