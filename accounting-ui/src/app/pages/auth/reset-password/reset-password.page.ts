import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { PostResetPasswordRequest } from '../../../core/models/repository-req-res/post-reset-password.model';
import { IAuthRepo } from '../../../core/repository/interfaces/auth.interface';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss']
})
export class ResetPasswordPageComponent implements OnInit
{
  resetPasswordForm = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  });
  token!: string;


  constructor(
    @Inject('IAuthRepo') private authRepo: IAuthRepo,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  )
  {

  }
  ngOnInit(): void
  {
    const token = this.activatedRoute.snapshot.queryParamMap.get("token");

    if (token)
    {
      this.token = token;
    }
  }

  async onSubmit()
  {
    if (this.resetPasswordForm.invalid)
    {
      return;
    }

    if (this.resetPasswordForm.get('password')?.value !== this.resetPasswordForm.get('confirmPassword')?.value)
    {
      alert('Passwords do not match');
      return;
    }

    const request: PostResetPasswordRequest = {
      token: this.token,
      password: this.resetPasswordForm.value.password!
    };

    const response = await firstValueFrom(
      this.authRepo.resetPassword(request)
    );

    this.router.navigate(['login']);
  }

  gotToLogin(): void
  {
    this.router.navigate(['login']);
  }
}
