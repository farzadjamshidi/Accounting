import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-groups',
  template: `<router-outlet></router-outlet>`,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupsComponent
{

}
