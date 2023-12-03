import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-expenses',
  template: `<router-outlet></router-outlet>`,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpensesComponent
{

}
