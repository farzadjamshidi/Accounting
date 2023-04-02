import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../../core/models/user.model';
import { IUserRepo } from '../../../core/repository/interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit
{
  list$!: Observable<User[]>;

  constructor(
    private router: Router,
    @Inject('IUserRepo') private userRepo: IUserRepo
  )
  {
  }

  ngOnInit(): void
  {
    this.list$ = this.userRepo.getAll();
  }

  clickUser(user: User): void
  {
    this.router.navigate(['user/' + user.id]);
  }
}
