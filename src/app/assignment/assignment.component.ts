import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AssignmentModel } from '../shared/assignment-model';
import { CourseModel } from '../shared/course-model';
import { CourseService } from '../shared/course.service';
import { CoursesModel } from '../shared/courses-model';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  coursesWrapper: CoursesModel;
  assignments: AssignmentModel[];

  searchAssignmentForm = new FormGroup({
    assignmentId: new FormControl('', Validators.required)
  });

  constructor(private courseService: CourseService, private toastrService: ToastrService) {
  }

  ngOnInit(): void {
  }

  searchAssignment() {
    this.courseService.getAssignments(this.searchAssignmentForm.value['assignmentId']).subscribe(response => {
      this.coursesWrapper = response;
      if (this.coursesWrapper.courses.length === 0) {
        this.toastrService.warning('There are no courses for the given Id!');
      } else {
      this.coursesWrapper.courses.forEach(course => {
        if (course.assignments.length === 0) {
          this.toastrService.warning('No Assignemnts for the given course found!');
        } else {
          this.assignments = course.assignments;
        }
      })
    }
    });
  }

}
