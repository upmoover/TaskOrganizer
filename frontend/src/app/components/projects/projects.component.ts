import {Component, Input, OnInit} from '@angular/core';
import {ProjectComponent} from "../project/project.component";
import {IProject} from "../../models/Project";
import {map, Observable, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProjectsService} from "../../service/projects.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: IProject[] = [];

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.projectService.getAll().subscribe(projects => {
      this.projects = projects
    })
  }

}
