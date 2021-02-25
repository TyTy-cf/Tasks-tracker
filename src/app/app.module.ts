import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { WorkersComponent } from './workers/workers.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskDeleteComponent } from './task-delete/task-delete.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'workers', component: WorkersComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'task/delete/:id', component: TaskDeleteComponent },
  { path: 'task/view/:id', component: TaskViewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    WorkersComponent,
    LoginComponent,
    TaskDeleteComponent,
    TaskViewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
