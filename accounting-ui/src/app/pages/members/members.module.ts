import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MemberV1BaseServerRepo } from '../../core/repository/base-server/v1/member.repo';
import { CreateEditMemberComponent } from './create-edit/create-edit-member.component';
import { MemberListComponent } from './list/member-list.component';
import { MemberComponent } from './member/member.component';
import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members.component';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [
    MembersComponent,
    MemberListComponent,
    CreateEditMemberComponent,
    MemberComponent
  ],
  imports: [
    ...MATERIAL_MODULES,
    CommonModule,
    ReactiveFormsModule,
    MembersRoutingModule
  ],
  providers: [
    { provide: 'IMemberRepo', useClass: MemberV1BaseServerRepo }
  ]
})
export class MembersModule { }
