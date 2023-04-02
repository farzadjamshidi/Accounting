import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: '../create/create-user.component.html',
  styleUrls: ['../create/create-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditUserComponent
{

}
