import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `<router-outlet></router-outlet>`,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsComponent
{

}
