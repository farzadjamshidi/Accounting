import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CreateEventRequest, Event, EventStatusEnum } from '../../../core/models/event.model';
import { IEventRepo } from '../../../core/repository/interfaces/event.interface';
import { IMemberRepo } from '../../../core/repository/interfaces/member.interface';

@Component({
  selector: 'app-create-edit-event',
  templateUrl: './create-edit-event.component.html',
  styleUrls: ['./create-edit-event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEditEventComponent implements OnInit
{
  createMode = true;
  editMode = false;
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    statusId: new FormControl(EventStatusEnum.New)
  });
  model!: Event;
  EventStatusEnum = EventStatusEnum;
  groupId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject('IEventRepo') private eventRepo: IEventRepo,
    @Inject('IMemberRepo') private memberRepo: IMemberRepo
  )
  {
    this.groupId = this.route.parent?.snapshot.paramMap.get('groupId')!;
  }

  async ngOnInit(): Promise<void>
  {
    const id = this.route.snapshot.paramMap.get('id');

    if (id)
    {
      this.createMode = false;
      this.editMode = true;

      this.model = await firstValueFrom(this.eventRepo.getById(id));

      this.form.controls['name'].setValue(this.model.name);
      this.form.controls['statusId'].setValue(this.model.statusId);
    }
  }

  private async createEvent(): Promise<Event>
  {
    const request: CreateEventRequest = {
      groupId: this.groupId,
      name: this.form.value.name,
      expenses: []
    };

    return await firstValueFrom(this.eventRepo.create(request));
  }

  async save(): Promise<void>
  {
    if (this.createMode)
    {
      const response = await this.createEvent();
      this.router.navigate(['../' + response.id], { relativeTo: this.route });
    }

    if (this.editMode)
    {
      const request: Event = {
        groupId: this.groupId,
        id: this.model.id,
        name: this.form.value.name,
        expenses: this.model.expenses,
        statusId: this.form.value.statusId
      };
      await firstValueFrom(this.eventRepo.edit(request));
      this.router.navigate(['../' + this.model.id], { relativeTo: this.route });
    }
  }

  async saveAndNew(): Promise<void>
  {
    await this.createEvent();
    this.form.reset();
  }
}
