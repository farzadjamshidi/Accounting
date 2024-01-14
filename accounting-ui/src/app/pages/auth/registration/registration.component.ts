import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { PostRegisterUserRequest } from '../../../core/models/repository-req-res/post-register-user.model';
import { IAuthRepo } from '../../../core/repository/interfaces/auth.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationPageComponent
{
  registrationForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  });


  constructor(
    @Inject('IAuthRepo') private authRepo: IAuthRepo,
    private router: Router,
    private fb: FormBuilder
  )
  {

  }

  async onSubmit()
  {
    if (this.registrationForm.invalid)
    {
      return;
    }

    if (this.registrationForm.get('password')?.value !== this.registrationForm.get('confirmPassword')?.value)
    {
      alert('Passwords do not match');
      return;
    }

    const request: PostRegisterUserRequest = {
      name: this.registrationForm.value.name!,
      email: this.registrationForm.value.email!,
      password: this.registrationForm.value.password!
    };

    const response = await firstValueFrom(
      this.authRepo.register(request)
    );

    this.router.navigate(['login']);
  }

  gotToLogin(): void
  {
    this.router.navigate(['login']);
  }
}
