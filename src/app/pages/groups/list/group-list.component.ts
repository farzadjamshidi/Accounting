import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from '../../../core/models/group.model';
import { IGroupRepo } from '../../../core/repository/interfaces/group.interface';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupListComponent
{
  list$ = this.groupRepo.getAll();

  constructor(
    private router: Router,
    @Inject('IGroupRepo') private groupRepo: IGroupRepo
  )
  {
  }

  clickGroup(group: Group): void
  {
    this.router.navigate(['group/' + group.id]);
  }
}
