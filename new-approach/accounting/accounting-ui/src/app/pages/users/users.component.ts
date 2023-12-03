import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `<router-outlet></router-outlet>`,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent
{

}
