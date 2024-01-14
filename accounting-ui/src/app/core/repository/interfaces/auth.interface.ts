import { Observable } from "rxjs";
import { PostForgotPasswordRequest, PostForgotPasswordResponse } from "../../models/repository-req-res/post-forgot-password.model";
import { PostLoginRequest, PostLoginResponse } from "../../models/repository-req-res/post-login.model";
import { PostRegisterUserRequest, PostRegisterUserResponse } from "../../models/repository-req-res/post-register-user.model";
import { PostResetPasswordRequest, PostResetPasswordResponse } from "../../models/repository-req-res/post-reset-password.model";

export interface IAuthRepo
{
  register(request: PostRegisterUserRequest): Observable<PostRegisterUserResponse>;
  login(request: PostLoginRequest): Observable<PostLoginResponse>;
  forgotPassword(request: PostForgotPasswordRequest): Observable<PostForgotPasswordResponse>;
  resetPassword(request: PostResetPasswordRequest): Observable<PostResetPasswordResponse>;
}
