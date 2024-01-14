import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { PostForgotPasswordRequest, PostForgotPasswordResponse } from "../../../models/repository-req-res/post-forgot-password.model";
import { PostLoginRequest, PostLoginResponse } from "../../../models/repository-req-res/post-login.model";
import { PostRegisterUserRequest, PostRegisterUserResponse } from "../../../models/repository-req-res/post-register-user.model";
import { PostResetPasswordRequest, PostResetPasswordResponse } from "../../../models/repository-req-res/post-reset-password.model";
import { IAuthRepo } from "../../interfaces/auth.interface";

@Injectable()
export class AuthV1BaseServerRepo implements IAuthRepo
{
  private readonly repoUrl = 'http://localhost:3000/api/auth';

  constructor(
    private http: HttpClient
  )
  {
  }

  register(request: PostRegisterUserRequest): Observable<PostRegisterUserResponse>
  {
    const mockData: PostRegisterUserResponse = {
      user: {
        id: 1,
        name: request.name,
        title: "",
        profilePictureURL: "",
        location: "",
        connections: 0
      },
    };
    return of(mockData);

    const endpointUrl = this.repoUrl;
    return this.http.post<PostRegisterUserResponse>(endpointUrl, request);
  }

  login(request: PostLoginRequest): Observable<PostLoginResponse>
  {
    const mockData: PostLoginResponse = {
      token: 'test token'
    };
    return of(mockData);

    const endpointUrl = this.repoUrl;
    return this.http.post<PostLoginResponse>(endpointUrl, request);
  }

  forgotPassword(request: PostForgotPasswordRequest): Observable<PostForgotPasswordResponse>
  {
    const mockData: PostForgotPasswordResponse = {};
    return of(mockData);

    const endpointUrl = this.repoUrl;
    return this.http.post<PostForgotPasswordResponse>(endpointUrl, request);
  }

  resetPassword(request: PostResetPasswordRequest): Observable<PostResetPasswordResponse>
  {
    const mockData: PostResetPasswordResponse = {};
    return of(mockData);

    const endpointUrl = this.repoUrl;
    return this.http.post<PostResetPasswordResponse>(endpointUrl, request);
  }
}
