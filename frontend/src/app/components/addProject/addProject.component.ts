import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'add-projects',
  templateUrl: './addProject.component.html',
  styleUrls: ['./addProject.component.css']
})

export class AddProjectComponent {
  form = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [Validators.required]),
    comment: new FormControl<string>(''),
  });

  get projectName() {
    return this.form.controls.name as FormControl;
  }

  get projectDescription() {
    return this.form.controls.description as FormControl;
  }

  get projectComment() {
    return this.form.controls.comment as FormControl;
  }

  constructor(private http: HttpClient, private router: Router) {
  }

  redirectProjects() {
    this.router.navigate(['/', 'projects']);
  }

  submit() {
    this.http.post('/project/create', this.form.value).subscribe(() => this.redirectProjects());
  }}
