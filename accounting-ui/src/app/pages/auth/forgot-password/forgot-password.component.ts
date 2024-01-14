import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { PostForgotPasswordRequest } from '../../../core/models/repository-req-res/post-forgot-password.model';
import { IAuthRepo } from '../../../core/repository/interfaces/auth.interface';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordPageComponent
{
  forgotPasswordForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(
    @Inject('IAuthRepo') private authRepo: IAuthRepo,
    private fb: FormBuilder,
    private router: Router
  ) { }

  async onSubmit()
  {
    if (this.forgotPasswordForm.invalid)
    {
      return;
    }

    const request: PostForgotPasswordRequest = {
      email: this.forgotPasswordForm.value.email!,
    };

    const response = await firstValueFrom(
      this.authRepo.forgotPassword(request)
    );

    this.router.navigate(['login']);

  }

  gotToLogin(): void
  {
    this.router.navigate(['login']);
  }
}
