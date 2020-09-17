import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssignmentSubmissionModel } from './assignment-submission-model';

@Injectable({
  providedIn: 'root'
})
export class SubmissionsService {

  constructor(private httpClient: HttpClient) { }

  getUserSubmissions(assignmentId: number): Observable<AssignmentSubmissionModel> {

    return this.httpClient.get<AssignmentSubmissionModel>('http://localhost:8080/api/submissions/' + assignmentId);

  }
}
