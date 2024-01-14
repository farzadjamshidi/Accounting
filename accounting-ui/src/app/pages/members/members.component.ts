import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-members',
  template: `<router-outlet></router-outlet>`,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MembersComponent
{

}
