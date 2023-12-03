import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CreateUserRequest, User } from '../../../core/models/user.model';
import { IUserRepo } from '../../../core/repository/interfaces/user.interface';

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEditUserComponent implements OnInit
{
  createMode = true;
  editMode = false;
  form: FormGroup = new FormGroup({
    name: new FormControl('')
  });
  model!: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

      this.model = await firstValueFrom(this.userRepo.getById(id));

      this.form.controls['name'].setValue(this.model.name);
    }
  }

  private async createUser(): Promise<User>
  {
    const request: CreateUserRequest = this.form.value;

    return await firstValueFrom(this.userRepo.create(request));
  }

  async save(): Promise<void>
  {
    if (this.createMode)
    {
      const response = await this.createUser();
      this.router.navigate(['user/' + response.id]);
    }

    if (this.editMode)
    {
      const request: User = {
        id: this.model.id,
        name: this.form.value.name
      };
      await firstValueFrom(this.userRepo.edit(request));
      this.router.navigate(['user/' + this.model.id]);
    }
  }

  async saveAndNew(): Promise<void>
  {
    await this.createUser();
    this.form.reset();
  }
}
