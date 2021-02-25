import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { WorkersComponent } from './workers/workers.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'workers', component: WorkersComponent },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    WorkersComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
