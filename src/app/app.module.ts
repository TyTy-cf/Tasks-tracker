import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskDeleteComponent } from './task-delete/task-delete.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { FormsModule } from '@angular/forms';
import { AbstractTasksService } from '../services/abstract.tasks-service';
import { TaskService } from '../services/task.service';
import { UserProfilComponent } from './user-profil/user-profil.component';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'workers', component: UsersComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'task/delete/:id', component: TaskDeleteComponent },
  { path: 'task/view/:id', component: TaskViewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    UsersComponent,
    LoginComponent,
    TaskDeleteComponent,
    TaskViewComponent,
    UserProfilComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [
    { provide: AbstractTasksService, useClass: TaskService },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
