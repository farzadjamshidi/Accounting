import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventV1LocalStorageRepo } from '../../core/repository/local-storage/v1/event.repo';
import { GroupV1LocalStorageRepo } from '../../core/repository/local-storage/v1/group.repo';
import { UserV1LocalStorageRepo } from '../../core/repository/local-storage/v1/user.repo';
import { CreateEditGroupComponent } from './create-edit/create-edit-group.component';
import { GroupComponent } from './group/group.component';
import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';
import { GroupListComponent } from './list/group-list.component';


@NgModule({
  declarations: [
    GroupsComponent,
    GroupListComponent,
    CreateEditGroupComponent,
    GroupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    GroupsRoutingModule
  ],
  providers: [
    { provide: 'IEventRepo', useClass: EventV1LocalStorageRepo },
    { provide: 'IGroupRepo', useClass: GroupV1LocalStorageRepo },
    { provide: 'IUserRepo', useClass: UserV1LocalStorageRepo }
  ]
})
export class GroupsModule { }
