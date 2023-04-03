import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditGroupComponent } from './create-edit/create-edit-group.component';
import { GroupComponent } from './group/group.component';
import { GroupsComponent } from './groups.component';
import { GroupListComponent } from './list/group-list.component';

const routes: Routes = [
  {
    path: '',
    component: GroupsComponent,
    children: [
      {
        path: 'list',
        component: GroupListComponent,
      },
      {
        path: 'create',
        component: CreateEditGroupComponent,
      },
      {
        path: ':id/edit',
        component: CreateEditGroupComponent,
      },
      {
        path: ':id',
        component: GroupComponent,
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
export class GroupsRoutingModule { }
