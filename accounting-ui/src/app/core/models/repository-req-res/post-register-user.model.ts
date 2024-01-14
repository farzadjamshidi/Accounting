
export class PostRegisterUserRequest
{
  name!: string;
  email!: string;
  password!: string;
}

export class PostRegisterUserResponse
{
  user!: {
    id: number;
    name: string;
    title: string;
    profilePictureURL: string;
    location: string;
    connections: number;
  };
}
