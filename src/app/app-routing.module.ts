import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from  './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from  './components/verify-email/verify-email.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaskComponent} from './components/task/task.component';
import { TaskListComponent } from '../app/task-list/task-list.component';
// Import canActivate guard services
import { AuthGuard} from './shared/guard/auth.guard';
import { SecureInnerPages} from './shared/guard/secure-inner-pages.guard.ts.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent , canActivate: [SecureInnerPages]},
  { path: 'login', component: LoginComponent,canActivate: [SecureInnerPages] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path:  'forgot-password', component:  ForgotPasswordComponent,canActivate: [SecureInnerPages] },
  { path:  'verify-email', component:  VerifyEmailComponent,canActivate: [SecureInnerPages] },
  { path: 'task',component: TaskComponent  },
  { path:'tasklist',component: TaskListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
