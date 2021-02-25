import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { WorkersComponent } from './workers/workers.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskDeleteComponent } from './task-delete/task-delete.component';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'workers', component: WorkersComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    WorkersComponent,
    LoginComponent,
    TaskDeleteComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
