import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CreateMemberRequest, Member } from '../../../core/models/member.model';
import { IMemberRepo } from '../../../core/repository/interfaces/member.interface';

@Component({
  selector: 'app-create-edit-member',
  templateUrl: './create-edit-member.component.html',
  styleUrls: ['./create-edit-member.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEditMemberComponent implements OnInit
{
  createMode = true;
  editMode = false;
  form: FormGroup = new FormGroup({
    name: new FormControl('')
  });
  model!: Member;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

      this.model = await firstValueFrom(this.memberRepo.getById(id));

      this.form.controls['name'].setValue(this.model.name);
    }
  }

  private async createMember(): Promise<Member>
  {
    const request: CreateMemberRequest = this.form.value;

    return await firstValueFrom(this.memberRepo.create(request));
  }

  async save(): Promise<void>
  {
    if (this.createMode)
    {
      const response = await this.createMember();
      this.router.navigate(['member/' + response.id]);
    }

    if (this.editMode)
    {
      const request: Member = {
        id: this.model.id,
        name: this.form.value.name
      };
      await firstValueFrom(this.memberRepo.edit(request));
      this.router.navigate(['member/' + this.model.id]);
    }
  }

  async saveAndNew(): Promise<void>
  {
    await this.createMember();
    this.form.reset();
  }
}
