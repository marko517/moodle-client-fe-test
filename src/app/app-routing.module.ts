import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentComponent } from './assignment/assignment.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/signup/signup.component';
import { FilehandlerComponent } from './filehandler/filehandler.component';
import { HomeComponent } from './home/home.component';
import { SubmissionComponent } from './submission/submission.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'filehandler', component: FilehandlerComponent },
  { path: 'users', component: UserComponent },
  { path: 'submissions', component: SubmissionComponent },
  { path: 'home', component: HomeComponent },
  { path: 'assignments', component: AssignmentComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
