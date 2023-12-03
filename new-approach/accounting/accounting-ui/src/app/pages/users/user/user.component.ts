import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { User } from '../../../core/models/user.model';
import { IUserRepo } from '../../../core/repository/interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent
{
  model!: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject('IUserRepo') private userRepo: IUserRepo
  )
  {
  }

  async ngOnInit(): Promise<void>
  {
    const id = this.route.snapshot.paramMap.get('id');

    if (id)
    {
      this.model = await firstValueFrom(this.userRepo.getById(id));
    }
  }

  async deleteUser(): Promise<void>
  {
    await firstValueFrom(this.userRepo.delete(this.model.id));
    this.router.navigate(['user/list']);
  }
}
