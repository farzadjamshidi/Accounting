
export class PostLoginRequest
{
  email!: string;
  password!: string;
}

export class PostLoginResponse
{
  access_token!: string;
}
