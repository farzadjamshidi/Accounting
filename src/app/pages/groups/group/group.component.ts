import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, firstValueFrom } from 'rxjs';
import { Group } from '../../../core/models/group.model';
import { IGroupRepo } from '../../../core/repository/interfaces/group.interface';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupComponent
{
  model$: Observable<Group>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject('IGroupRepo') private groupRepo: IGroupRepo
  )
  {
    const id = this.route.snapshot.paramMap.get('id')!;

    this.model$ = this.groupRepo.getById(id);
  }

  async deleteGroup(group: Group): Promise<void>
  {
    await firstValueFrom(this.groupRepo.delete(group.id));
    this.router.navigate(['group/list']);
  }
}
