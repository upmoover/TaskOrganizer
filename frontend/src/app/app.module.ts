import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddButtonComponent} from './components/addButton/addButton.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {KanbanComponent} from './components/kanban/kanban.component';
import {HelpComponent} from './components/help/help.component';
import {AppRoutingModule} from "./app-routing.module";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {AddProjectComponent} from "./components/addProject/addProject.component";
import {ModalComponent} from './components/modal/modal.component';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import { ProjectsComponent } from './components/projects/projects.component';
import {ProjectComponent} from "./components/project/project.component";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    AddButtonComponent,
    TasksComponent,
    KanbanComponent,
    HelpComponent,
    AddProjectComponent,
    AddProjectComponent,
    ModalComponent,
    ProjectsComponent,
    ProjectComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        MatTabsModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientXsrfModule.withOptions({
            cookieName: 'app-Xsrf-Cookie',
            headerName: 'app-Xsrf-Header',
        }),
        MatCardModule,
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
