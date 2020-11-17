import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/CourseService';
import { ActivatedRoute } from '@angular/router';
import Course from '../../constants/types';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css'],
})
export class CourseTableComponent implements OnInit {
  courses: Course[] = [];
  courseId: string = '';

  constructor(
    private activateRoute: ActivatedRoute,
    private service: CourseService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      if (typeof params.courseId) {
        this.courseId = params.courseId;
      }
    });

    this.service.fetchAllCourses().then((courses) => (this.courses = courses));
  }
}
