import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditMemberComponent } from './create-edit/create-edit-member.component';
import { MemberListComponent } from './list/member-list.component';
import { MemberComponent } from './member/member.component';
import { MembersComponent } from './members.component';

const routes: Routes = [
  {
    path: '',
    component: MembersComponent,
    children: [
      {
        path: 'list',
        component: MemberListComponent,
      },
      {
        path: 'create',
        component: CreateEditMemberComponent,
      },
      {
        path: ':id/edit',
        component: CreateEditMemberComponent,
      },
      {
        path: ':id',
        component: MemberComponent,
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
