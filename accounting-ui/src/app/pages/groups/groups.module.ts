import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserV1BaseServerRepo } from '../../core/repository/base-server/v1/user.repo';
import { EventV1LocalStorageRepo } from '../../core/repository/local-storage/v1/event.repo';
import { GroupV1LocalStorageRepo } from '../../core/repository/local-storage/v1/group.repo';
import { CreateEditGroupComponent } from './create-edit/create-edit-group.component';
import { GroupComponent } from './group/group.component';
import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';
import { GroupListComponent } from './list/group-list.component';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [
    GroupsComponent,
    GroupListComponent,
    CreateEditGroupComponent,
    GroupComponent
  ],
  imports: [
    ...MATERIAL_MODULES,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    GroupsRoutingModule
  ],
  providers: [
    { provide: 'IEventRepo', useClass: EventV1LocalStorageRepo },
    { provide: 'IGroupRepo', useClass: GroupV1LocalStorageRepo },
    { provide: 'IUserRepo', useClass: UserV1BaseServerRepo }
  ]
})
export class GroupsModule { }
