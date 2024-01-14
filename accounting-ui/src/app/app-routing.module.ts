import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: 'group'
  },
  {
    path: 'member',
    loadChildren: () => import('./pages/members/members.module').then(m => m.MembersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'group/:groupId/event/:eventId/expense',
    loadChildren: () => import('./pages/expenses/expenses.module').then(m => m.ExpensesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'group/:groupId/event',
    loadChildren: () => import('./pages/events/events.module').then(m => m.EventsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'group',
    loadChildren: () => import('./pages/groups/groups.module').then(m => m.GroupsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'registeration',
    loadChildren: () => import('./pages/auth/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/auth/logout/logout.module').then(m => m.LogoutModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/auth/reset-password/reset-password.module').then(m => m.ResetPasswordModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
