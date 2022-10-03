import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddProjectComponent} from "../addProject/addProject.component";

@Component({
  selector: 'app-addButton',
  templateUrl: './addButton.component.html',
  styleUrls: ['./addButton.component.css']
})
export class AddButtonComponent {

  constructor(public dialog: MatDialog) { }

  dialogAddProject(enterAnimationDuration: string, exitAnimationDuration: string) {
    this.dialog.open(AddProjectComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
