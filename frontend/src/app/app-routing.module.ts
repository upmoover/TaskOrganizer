import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddButtonComponent} from './components/addButton/addButton.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {KanbanComponent} from './components/kanban/kanban.component';
import {HelpComponent} from './components/help/help.component';
import {ProjectsComponent} from "./components/projects/projects.component";

const routes: Routes = [
  {path: 'projects', component: ProjectsComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'kanban', component: KanbanComponent},
  {path: 'help', component: HelpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
