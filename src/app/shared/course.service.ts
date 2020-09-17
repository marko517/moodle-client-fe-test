import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseModel } from './course-model';
import { CoursesModel } from './courses-model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) { }

  getCourses(): Observable<CourseModel[]> {
    return this.httpClient.get<CourseModel[]>('http://localhost:8080/api/courses');
  }

  getAssignments(id: number): Observable<CoursesModel> {
    return this.httpClient.get<CoursesModel>('http://localhost:8080/api/assignments/' + id);
  }
}
