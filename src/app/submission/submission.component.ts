import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AssignmentModel } from '../shared/assignment-model';
import { AssignmentSubmissionModel } from '../shared/assignment-submission-model';
import { SubmissionsService } from '../shared/submissions.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {

  assignment: AssignmentSubmissionModel;

  searchSubmissionForm = new FormGroup({
    submissionId:  new FormControl('', Validators.required)
  });

  constructor(private submissionsService: SubmissionsService, private toastrService: ToastrService) { 

  }

  ngOnInit(): void {
  }

  searchSubmissions() {
    this.submissionsService.getUserSubmissions(this.searchSubmissionForm.value['submissionId']).subscribe(response => {
      this.assignment = response;
    });
  }
}
