import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseModel } from '../shared/course-model';
import { CourseService } from '../shared/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses: CourseModel[] = [];

  searchUserForm: FormGroup;

  constructor(private courseService: CourseService) { 
    this.courseService.getCourses().subscribe(response => {
      this.courses = response;
    });
  }

  ngOnInit(): void {
    this.searchUserForm = new FormGroup({
      userId: new FormControl('', Validators.required)
    });
  }

  searchUser() {
    console.log(this.searchUserForm.value);
  }

}
