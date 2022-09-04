import {Component} from "@angular/core";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'add-projects',
  templateUrl: './addProject.component.html',
  styleUrls: ['./addProject.component.css']
})

export class AddProjectComponent{
  constructor(
    private formBuilder: FormBuilder,
  ) {}

  checkoutForm = this.formBuilder.group({
    project_name: '',
    project_description: '',
    project_comment: ''
  });

  onSubmit(): void {
    console.log(this.checkoutForm)
  }
}

