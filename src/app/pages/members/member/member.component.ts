import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Member } from '../../../core/models/member.model';
import { IMemberRepo } from '../../../core/repository/interfaces/member.interface';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberComponent
{
  model!: Member;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject('IMemberRepo') private memberRepo: IMemberRepo
  )
  {
  }

  async ngOnInit(): Promise<void>
  {
    const id = this.route.snapshot.paramMap.get('id');

    if (id)
    {
      this.model = await firstValueFrom(this.memberRepo.getById(id));
    }
  }

  async deleteMember(): Promise<void>
  {
    await firstValueFrom(this.memberRepo.delete(this.model.id));
    this.router.navigate(['member/list']);
  }
}
