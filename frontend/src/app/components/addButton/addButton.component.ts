import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddProjectComponent} from "../addProject/addProject.component";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent{

  constructor(public dialog: MatDialog) { }

  dialogAddProject(enterAnimationDuration: string, exitAnimationDuration: string) {
    this.dialog.open(AddProjectComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
