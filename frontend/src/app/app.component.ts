import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {MatTabChangeEvent} from "@angular/material/tabs";
import {HttpClient} from '@angular/common/http';
import {IProject} from "./models/Project";
import {ProjectsComponent} from "./components/projects/projects.component";

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  constructor(private router: Router) {
  }

  tabClick(tab: MatTabChangeEvent) {
    switch (tab.index) {
      case 0:
        this.goToProjects()
        break;
      case 1:
        this.goToTasks();
        break;
      case 2:
        this.goToKanban();
        break;
      case 3:
        this.goToHelp();
        break;
    }
  }

  goToProjects() {
    this.router.navigate(['/', 'projects']);
  }

  goToTasks() {
    this.router.navigate(['/', 'tasks']);
  }

  goToKanban() {
    this.router.navigate(['/', 'kanban']);
  }

  goToHelp() {
    this.router.navigate(['/', 'help']);
  }
}
