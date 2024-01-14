import { Member } from "../../app/models/member.model";

export class CreateGroupDto
{
  name: string;
  members!: Member[];
}
