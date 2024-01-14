import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Member } from '../../../core/models/member.model';
import { IMemberRepo } from '../../../core/repository/interfaces/member.interface';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberListComponent implements OnInit
{
  list$!: Observable<Member[]>;

  constructor(
    private router: Router,
    @Inject('IMemberRepo') private memberRepo: IMemberRepo
  )
  {
  }

  ngOnInit(): void
  {
    this.list$ = this.memberRepo.getAll();
  }

  clickMember(member: Member): void
  {
    this.router.navigate(['member/' + member.id]);
  }
}
