import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CreateGroupRequest, Group } from '../../../core/models/group.model';
import { Member } from '../../../core/models/member.model';
import { IGroupRepo } from '../../../core/repository/interfaces/group.interface';
import { IMemberRepo } from '../../../core/repository/interfaces/member.interface';

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
  members$ = this.memberRepo.getAll();
  membersByIdForCheckBox: { [key: string]: boolean; } = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject('IGroupRepo') private groupRepo: IGroupRepo,
    @Inject('IMemberRepo') private memberRepo: IMemberRepo
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

      this.model.members.map((member) =>
      {
        this.membersByIdForCheckBox[member.id] = true;
      });
    }
  }

  private async createGroup(members: Member[]): Promise<Group>
  {
    const request: CreateGroupRequest = {
      name: this.form.value.name,
      members: members.filter(member => this.membersByIdForCheckBox[member.id])
    };

    return await firstValueFrom(this.groupRepo.create(request));
  }

  async save(members: Member[]): Promise<void>
  {
    if (this.createMode)
    {
      const response = await this.createGroup(members);
      this.router.navigate(['group/' + response.id]);
    }

    if (this.editMode)
    {
      const request: Group = {
        id: this.model.id,
        name: this.form.value.name,
        members: members.filter(member => this.membersByIdForCheckBox[member.id])
      };
      await firstValueFrom(this.groupRepo.edit(request));
      this.router.navigate(['group/' + this.model.id]);
    }
  }

  async saveAndNew(members: Member[]): Promise<void>
  {
    await this.createGroup(members);
    this.form.reset();
  }
}
