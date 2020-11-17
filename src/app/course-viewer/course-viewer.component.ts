import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/CourseService';
import { ActivatedRoute } from '@angular/router';
import Course from '../../constants/types';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css'],
})
export class CourseViewerComponent implements OnInit {
  courses: Course[] = [];
  courseId: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CourseService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (typeof params.courseId !== 'undefined') {
        this.courseId = params.courseId;
      }
    });

    this.service.fetchAllCourses().then((courses) => (this.courses = courses));
  }

  selectCourse = (courseId: string): void => {};
}
