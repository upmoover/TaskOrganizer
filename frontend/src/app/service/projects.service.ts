import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProject} from "../models/Project";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IProject[]> {
    return this.http.get<IProject[]>('/project/getAll')
  }
}
