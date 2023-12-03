import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CreateGroupRequest, Group } from '../../../core/models/group.model';
import { User } from '../../../core/models/user.model';
import { IGroupRepo } from '../../../core/repository/interfaces/group.interface';
import { IUserRepo } from '../../../core/repository/interfaces/user.interface';

@Component({
  selector: 'app-create-edit-group',
  templateUrl: './create-edit-group.component.html',
  styleUrls: ['./create-edit-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEditGroupComponent implements OnInit
{
  createMode = true;
  editMode = false;
  form: FormGroup = new FormGroup({
    name: new FormControl('')
  });
  model!: Group;
  users$ = this.userRepo.getAll();
  usersByIdForCheckBox: { [key: string]: boolean; } = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject('IGroupRepo') private groupRepo: IGroupRepo,
    @Inject('IUserRepo') private userRepo: IUserRepo
  )
  {
  }

  async ngOnInit(): Promise<void>
  {
    const id = this.route.snapshot.paramMap.get('id');

    if (id)
    {
      this.createMode = false;
      this.editMode = true;

      this.model = await firstValueFrom(this.groupRepo.getById(id));

      this.form.controls['name'].setValue(this.model.name);

      this.model.users.map((user) =>
      {
        this.usersByIdForCheckBox[user.id] = true;
      });
    }
  }

  private async createGroup(users: User[]): Promise<Group>
  {
    const request: CreateGroupRequest = {
      name: this.form.value.name,
      users: users.filter(user => this.usersByIdForCheckBox[user.id])
    };

    return await firstValueFrom(this.groupRepo.create(request));
  }

  async save(users: User[]): Promise<void>
  {
    if (this.createMode)
    {
      const response = await this.createGroup(users);
      this.router.navigate(['group/' + response.id]);
    }

    if (this.editMode)
    {
      const request: Group = {
        id: this.model.id,
        name: this.form.value.name,
        users: users.filter(user => this.usersByIdForCheckBox[user.id])
      };
      await firstValueFrom(this.groupRepo.edit(request));
      this.router.navigate(['group/' + this.model.id]);
    }
  }

  async saveAndNew(users: User[]): Promise<void>
  {
    await this.createGroup(users);
    this.form.reset();
  }
}
