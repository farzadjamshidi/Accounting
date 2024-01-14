import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout.component.html'
})
export class LogoutPageComponent implements OnInit
{
  constructor(
    private router: Router
  )
  {
  }

  ngOnInit(): void
  {
    localStorage.removeItem('token');

    setTimeout(() =>
    {
      this.router.navigate(['login']);
    });
  }
}
