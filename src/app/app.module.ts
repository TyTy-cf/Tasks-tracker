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
import { AbstractTaskService } from '../services/abstract.task-service';
import { TaskService } from '../services/task.service';
import { UserProfilComponent } from './user-profil/user-profil.component';
import {AbstractUserService} from '../services/abstract.user-service';
import {UserService} from '../services/user.service';
import {AbstractClientService} from '../services/abstract.client-service';
import {ClientService} from '../services/client.service';
import {AbstractProjectService} from '../services/abstract.projet-service';
import {ProjectService} from '../services/project.service';
import {AbstractServersService} from '../services/abstract.server-service';
import {ServerService} from '../services/server.service';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'user', component: UsersComponent },
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
    { provide: AbstractServersService, useClass: ServerService },
    { provide: AbstractClientService, useClass: ClientService },
    { provide: AbstractProjectService, useClass: ProjectService },
    { provide: AbstractUserService, useClass: UserService },
    { provide: AbstractTaskService, useClass: TaskService },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
