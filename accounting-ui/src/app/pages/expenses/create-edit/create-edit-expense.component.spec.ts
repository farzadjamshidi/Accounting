import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditExpenseComponent } from './create-edit-expense.component';

describe('CreateEditExpenseComponent', () =>
{
  let component: CreateEditExpenseComponent;
  let fixture: ComponentFixture<CreateEditExpenseComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [CreateEditExpenseComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateEditExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
