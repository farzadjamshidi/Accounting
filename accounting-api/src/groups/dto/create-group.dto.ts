import { User } from "../../app/models/user.model";

export class CreateGroupDto
{
  name: string;
  users!: User[];
}
