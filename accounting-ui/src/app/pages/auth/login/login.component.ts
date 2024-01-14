import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { PostLoginRequest } from '../../../core/models/repository-req-res/post-login.model';
import { IAuthRepo } from '../../../core/repository/interfaces/auth.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPageComponent
{
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    @Inject('IAuthRepo') private authRepo: IAuthRepo,
    private fb: FormBuilder,
    private router: Router
  )
  {
  }

  async onSubmit(): Promise<void>
  {
    if (this.loginForm.invalid)
    {
      return;
    }

    const request: PostLoginRequest = {
      email: this.loginForm.value.email!,
      password: this.loginForm.value.password!
    };

    const response = await firstValueFrom(
      this.authRepo.login(request)
    );

    localStorage.setItem('token', response.token);

    setTimeout(() =>
    {
      this.router.navigate(['home']);
    });
  }

  gotToRegisteration(): void
  {
    this.router.navigate(['registeration']);
  }
  gotToForgotPassword(): void
  {
    this.router.navigate(['forgot-password']);
  }
}
