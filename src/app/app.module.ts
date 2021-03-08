import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskDeleteComponent } from './task-delete/task-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbstractTaskService } from '../services/abstract.task-service';
import { TaskService } from '../services/task.service';
import {AbstractUserService} from '../services/abstract.user-service';
import {UserService} from '../services/user.service';
import {AbstractClientService} from '../services/abstract.client-service';
import {ClientService} from '../services/client.service';
import {AbstractProjectService} from '../services/abstract.projet-service';
import {ProjectService} from '../services/project.service';
import {AbstractServersService} from '../services/abstract.server-service';
import {ServerService} from '../services/server.service';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {TaskFormComponent} from './task-form/task-form.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServersComponent } from './servers/servers.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: SideMenuComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'task/delete/:id', component: TaskDeleteComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    LoginComponent,
    TaskDeleteComponent,
    SideMenuComponent,
    TaskFormComponent,
    ProjectsComponent,
    ServersComponent,
    ClientsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
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
